#!/usr/bin/env python3
"""
Translation Coverage Report

.translation-status.json からカバー率レポートを生成します。
GitHub Actions の Job Summary にも出力します。
"""

import json
import os
from pathlib import Path


STATUS_FILE = Path(".translation-status.json")


def load_status():
    """翻訳状態ファイルを読み込み"""
    if STATUS_FILE.exists():
        with open(STATUS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def categorize(status):
    """カテゴリ別に集計"""
    categories = {}
    for key, info in status.items():
        # トップレベルカテゴリを抽出
        category = key.split('/')[0]
        if category not in categories:
            categories[category] = {
                'total': 0,
                'machine': 0,
                'reviewed': 0,
                'not_translated': 0,
                'deleted': 0,
            }
        cat = categories[category]
        cat['total'] += 1

        ts = info.get('translation_status', 'not_translated')
        if ts in cat:
            cat[ts] += 1
        else:
            cat['not_translated'] += 1

    return categories


def generate_markdown_report(status, categories):
    """Markdownレポートを生成"""
    total = len(status)
    translated = sum(1 for v in status.values() if v.get('translation_status') in ('machine', 'reviewed'))
    machine = sum(1 for v in status.values() if v.get('translation_status') == 'machine')
    reviewed = sum(1 for v in status.values() if v.get('translation_status') == 'reviewed')
    not_translated = sum(1 for v in status.values() if v.get('translation_status') == 'not_translated')
    pct = (translated / total * 100) if total else 0

    lines = []
    lines.append("# 翻訳カバー率レポート")
    lines.append("")
    lines.append(f"| 指標 | 値 |")
    lines.append(f"|---|---|")
    lines.append(f"| 総ページ数 | {total} |")
    lines.append(f"| 翻訳済み | {translated} ({pct:.0f}%) |")
    lines.append(f"| うち機械翻訳 | {machine} |")
    lines.append(f"| うち手直し済み | {reviewed} |")
    lines.append(f"| 未翻訳 | {not_translated} |")
    lines.append("")

    # カテゴリ別
    lines.append("## カテゴリ別")
    lines.append("")
    lines.append("| カテゴリ | 総数 | 翻訳済み | カバー率 |")
    lines.append("|---|---|---|---|")
    for cat_name in sorted(categories.keys()):
        cat = categories[cat_name]
        cat_translated = cat['machine'] + cat['reviewed']
        cat_pct = (cat_translated / cat['total'] * 100) if cat['total'] else 0
        lines.append(f"| {cat_name} | {cat['total']} | {cat_translated} | {cat_pct:.0f}% |")
    lines.append("")

    # 未翻訳ページ一覧（framework のみ — 優先度高）
    lines.append("## 未翻訳ページ (framework)")
    lines.append("")
    framework_untranslated = [
        k for k, v in sorted(status.items())
        if k.startswith('framework/') and v.get('translation_status') == 'not_translated'
    ]
    if framework_untranslated:
        for key in framework_untranslated:
            url = status[key].get('source_url', '')
            lines.append(f"- [ ] [{key}]({url})")
    else:
        lines.append("全て翻訳済み!")
    lines.append("")

    return "\n".join(lines)


def update_badge(total, translated):
    """shields.io endpoint バッジ用 JSON を更新"""
    pct = (translated / total * 100) if total else 0

    # 色の決定
    if pct >= 80:
        color = "brightgreen"
    elif pct >= 50:
        color = "green"
    elif pct >= 30:
        color = "yellow"
    else:
        color = "orange"

    badge = {
        "schemaVersion": 1,
        "label": "翻訳カバー率",
        "message": f"{pct:.0f}%",
        "color": color,
    }

    badge_path = Path("static/badge/translation.json")
    badge_path.parent.mkdir(parents=True, exist_ok=True)
    with open(badge_path, 'w', encoding='utf-8') as f:
        json.dump(badge, f, indent=2, ensure_ascii=False)


def main():
    status = load_status()

    if not status:
        print("Error: .translation-status.json が空です。")
        print("先に batch-extract.py と init-status.py を実行してください。")
        return 1

    categories = categorize(status)
    report = generate_markdown_report(status, categories)

    # コンソール出力
    print(report)

    # バッジ JSON を更新
    total = len(status)
    translated = sum(1 for v in status.values() if v.get('translation_status') in ('machine', 'reviewed'))
    update_badge(total, translated)

    # GitHub Actions Job Summary に出力
    summary_file = os.getenv('GITHUB_STEP_SUMMARY')
    if summary_file:
        with open(summary_file, 'a', encoding='utf-8') as f:
            f.write(report)
        print("\n(GitHub Actions Job Summary に出力しました)")

    return 0


if __name__ == "__main__":
    exit(main())
