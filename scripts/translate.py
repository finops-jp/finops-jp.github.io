#!/usr/bin/env python3
"""
AI Translator for FinOps Foundation Content

orig/ の英語Markdownを日本語に翻訳し、Docusaurus用のfrontmatter付きで docs/ に配置します。
GitHub Models API (GPT-4o) を使用します。

使用方法:
  # 未翻訳ページを最大3件翻訳
  python scripts/translate.py --max-pages 3

  # 特定のページだけ翻訳
  python scripts/translate.py --key framework/capabilities/executive-strategy-alignment

  # ドライラン（翻訳対象を表示するだけ）
  python scripts/translate.py --dry-run
"""

import sys
import os
import io
import json
import argparse
import hashlib
import time
from pathlib import Path
from datetime import datetime

# Windows環境でUTF-8出力を強制
if sys.platform == 'win32':
    os.environ.setdefault('PYTHONIOENCODING', 'utf-8')

import requests

STATUS_FILE = Path(".translation-status.json")
ORIG_DIR = Path("orig")
DOCS_DIR = Path("docs")
GLOSSARY_FILE = Path("scripts/glossary.json")

# AI API設定
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent"


def load_status():
    if STATUS_FILE.exists():
        with open(STATUS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def save_status(status):
    with open(STATUS_FILE, 'w', encoding='utf-8') as f:
        json.dump(status, f, indent=2, ensure_ascii=False)


def load_glossary():
    if GLOSSARY_FILE.exists():
        with open(GLOSSARY_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def get_untranslated_keys(status):
    """翻訳が必要なキーを返す（not_translated または outdated）"""
    keys = []
    for key, info in status.items():
        ts = info.get('translation_status', 'not_translated')
        if ts in ('not_translated', 'outdated'):
            # orig/ にファイルがあるか確認
            orig_path = key_to_orig_path(key)
            if orig_path.exists():
                keys.append(key)
    return sorted(keys)


def key_to_orig_path(key):
    """ステータスキーから orig/ のファイルパスを返す"""
    parts = key.split('/')
    if len(parts) == 1:
        return ORIG_DIR / parts[0] / "index.md"
    else:
        return ORIG_DIR / '/'.join(parts[:-1]) / f"{parts[-1]}.md"


def key_to_docs_path(key):
    """ステータスキーから docs/ のファイルパスを返す"""
    parts = key.split('/')
    if len(parts) == 1:
        return DOCS_DIR / parts[0] / "index.md"
    else:
        return DOCS_DIR / '/'.join(parts[:-1]) / f"{parts[-1]}.md"


def extract_title_from_markdown(content):
    """Markdownの最初のh1からタイトルを抽出"""
    for line in content.split('\n'):
        if line.startswith('# '):
            return line[2:].strip()
    return None


def translate_content(content, glossary, api_key):
    """Gemini APIを使って翻訳"""
    glossary_text = "\n".join([f"- {en}: {ja}" for en, ja in glossary.items()])

    prompt = f"""あなたはFinOps(クラウド財務管理)の専門家かつ技術翻訳者です。以下の英語のFinOps技術文書を日本語に翻訳してください。

## 翻訳ルール

1. **専門用語**: 以下の用語辞書に従ってください。辞書にない専門用語は適切な日本語訳を選んでください。
{glossary_text}

2. **Markdown構造**: 元のMarkdown構造を完全に保持してください。
   - 見出しレベル(#, ##, ###など)
   - リスト(-, *, 1.など)
   - リンク([text](url)) — URLは変更しない
   - 強調(**bold**, *italic*)
   - 画像(![alt](url)) — そのまま

3. **翻訳品質**:
   - 自然で読みやすい日本語
   - 技術文書として正確
   - 冗長にならないよう簡潔に

4. **英語のまま残すもの**:
   - FinOps, AWS, Azure, GCP 等の固有名詞
   - 製品名、サービス名
   - URL、コード

## 翻訳対象

{content}

## 出力

翻訳されたMarkdownテキストのみを出力してください。説明や注釈は不要です。"""

    headers = {
        "Content-Type": "application/json",
    }

    payload = {
        "contents": [
            {
                "parts": [
                    {"text": prompt}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.3,
            "maxOutputTokens": 65536,
        }
    }

    url = f"{GEMINI_API_URL}?key={api_key}"
    response = requests.post(url, headers=headers, json=payload, timeout=120)
    response.raise_for_status()

    result = response.json()
    translated = result['candidates'][0]['content']['parts'][0]['text'].strip()

    # Markdownコードブロックで囲まれている場合は除去
    if translated.startswith('```markdown'):
        translated = translated[len('```markdown'):].strip()
    if translated.startswith('```'):
        translated = translated[3:].strip()
    if translated.endswith('```'):
        translated = translated[:-3].strip()

    return translated


def create_docs_file(key, translated_content, source_url, title):
    """Docusaurus用のfrontmatter付きドキュメントを生成"""
    # タイトルが翻訳済みコンテンツの最初のh1にある場合、frontmatterのtitleとして使用
    translated_title = extract_title_from_markdown(translated_content)
    if translated_title:
        doc_title = translated_title
        # 翻訳済みコンテンツから最初のh1を除去（frontmatterのtitleと重複するため）
        lines = translated_content.split('\n')
        for i, line in enumerate(lines):
            if line.startswith('# '):
                lines[i] = ''
                break
        translated_content = '\n'.join(lines).strip()
    else:
        doc_title = title or key.split('/')[-1]

    frontmatter = f"""---
title: {doc_title}
---

[英語版]: {source_url}

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

"""
    return frontmatter + translated_content + '\n'


def process_page(key, status, glossary, api_key):
    """1ページを翻訳して保存"""
    orig_path = key_to_orig_path(key)
    docs_path = key_to_docs_path(key)
    source_url = status[key].get('source_url', f"https://www.finops.org/{key}/")

    # 英語コンテンツを読み込み
    orig_content = orig_path.read_text(encoding='utf-8')
    title = extract_title_from_markdown(orig_content)

    print(f"  Translating: {key}")
    print(f"    Title: {title}")
    print(f"    Size: {len(orig_content)} chars")

    # 翻訳
    translated = translate_content(orig_content, glossary, api_key)

    # ドキュメント生成
    doc_content = create_docs_file(key, translated, source_url, title)

    # 保存
    docs_path.parent.mkdir(parents=True, exist_ok=True)
    docs_path.write_text(doc_content, encoding='utf-8')

    # ステータス更新
    status[key]['translation_status'] = 'machine'
    status[key]['docs_path'] = str(docs_path.relative_to(DOCS_DIR)).replace('\\', '/')
    status[key]['translated_date'] = datetime.now().isoformat()

    print(f"    → Saved: {docs_path}")
    return True


def main():
    parser = argparse.ArgumentParser(description='Translate FinOps content to Japanese')
    parser.add_argument('--max-pages', type=int, default=3,
                        help='Maximum number of pages to translate (default: 3)')
    parser.add_argument('--key', type=str, default=None,
                        help='Translate a specific page by key')
    parser.add_argument('--dry-run', action='store_true',
                        help='Show what would be translated without actually translating')
    parser.add_argument('--category', type=str, default=None,
                        help='Only translate pages in this category (e.g., framework, wg)')

    args = parser.parse_args()

    # GitHub Token確認
    api_key = os.getenv('GEMINI_API_KEY')
    if not api_key and not args.dry_run:
        print("Error: GEMINI_API_KEY environment variable is required")
        print("Set it with: export GEMINI_API_KEY=your_key")
        return 1

    # ステータス読み込み
    status = load_status()
    if not status:
        print("Error: .translation-status.json が空です。")
        print("先に batch-extract.py と init-status.py を実行してください。")
        return 1

    # 翻訳対象を決定
    if args.key:
        if args.key not in status:
            print(f"Error: Key '{args.key}' not found in status")
            return 1
        targets = [args.key]
    else:
        targets = get_untranslated_keys(status)
        if args.category:
            targets = [k for k in targets if k.startswith(args.category + '/')]

    if not targets:
        print("No pages to translate. All pages are up to date!")
        return 0

    # ドライラン
    if args.dry_run:
        print(f"Pages to translate ({len(targets)} total, limit: {args.max_pages}):")
        for key in targets[:args.max_pages]:
            print(f"  - {key}")
        if len(targets) > args.max_pages:
            print(f"  ... and {len(targets) - args.max_pages} more")
        return 0

    # 翻訳実行
    glossary = load_glossary()
    translated_count = 0

    print(f"Translating up to {args.max_pages} pages...")
    print(f"Targets available: {len(targets)}")
    print()

    for key in targets[:args.max_pages]:
        try:
            success = process_page(key, status, glossary, api_key)
            if success:
                translated_count += 1
            # レート制限回避
            time.sleep(2)
        except Exception as e:
            print(f"  Error translating {key}: {e}")
            continue

    # ステータス保存
    save_status(status)

    # サマリー
    print()
    print(f"Done! Translated {translated_count} pages.")
    print(f"Remaining: {len(targets) - translated_count}")

    return 0


if __name__ == "__main__":
    exit(main())
