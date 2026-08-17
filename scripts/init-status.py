#!/usr/bin/env python3
"""
Translation Status Initializer

既存のdocs/とorig/を突き合わせて.translation-status.jsonを初期生成します。
- orig/にファイルがある → source_hashを記録
- docs/に対応ファイルがある → translation_status を判定して記録
"""

import json
import hashlib
from pathlib import Path

STATUS_FILE = Path(".translation-status.json")
ORIG_DIR = Path("orig")
DOCS_DIR = Path("docs")


def content_hash(content):
    """コンテンツのSHA-256ハッシュを返す"""
    return hashlib.sha256(content.encode('utf-8')).hexdigest()


def url_path_from_orig(orig_path):
    """orig/のファイルパスからURLパスのキーを生成"""
    # orig/framework/principles.md → framework/principles
    rel = orig_path.relative_to(ORIG_DIR)
    # index.mdの場合はディレクトリ名をキーにする
    if rel.name == 'index.md':
        return str(rel.parent).replace('\\', '/')
    else:
        return str(rel.with_suffix('')).replace('\\', '/')


def find_docs_file(url_key):
    """URLキーに対応するdocs/内のファイルを探す"""
    # docs/framework/principles.md
    candidate1 = DOCS_DIR / f"{url_key}.md"
    if candidate1.exists():
        return candidate1

    # docs/framework/principles/index.md
    candidate2 = DOCS_DIR / url_key / "index.md"
    if candidate2.exists():
        return candidate2

    return None


def detect_translation_status(docs_content):
    """ドキュメントの翻訳ステータスを判定"""
    # frontmatterに「機械翻訳」の警告があるかチェック
    if '翻訳は機械翻訳により提供されています' in docs_content:
        return 'machine'
    # ドラフト警告がない → 人手で手直し済みとみなす
    return 'reviewed'


def main():
    print("Translation Status Initializer")
    print("=" * 50)

    if not ORIG_DIR.exists():
        print(f"Error: {ORIG_DIR}/ が存在しません。")
        print("先に batch-extract.py を実行して orig/ を生成してください。")
        return 1

    # 既存のステータスを読み込み（あれば）
    status = {}
    if STATUS_FILE.exists():
        with open(STATUS_FILE, 'r', encoding='utf-8') as f:
            status = json.load(f)
        print(f"Loaded existing status: {len(status)} entries")

    # orig/内の全Markdownファイルをスキャン
    orig_files = list(ORIG_DIR.rglob("*.md"))
    print(f"Found {len(orig_files)} files in orig/")

    initialized = 0
    already_exists = 0

    for orig_path in sorted(orig_files):
        url_key = url_path_from_orig(orig_path)

        # エントリがなければ作成
        if url_key not in status:
            orig_content = orig_path.read_text(encoding='utf-8')
            status[url_key] = {
                'source_url': f"https://www.finops.org/{url_key}/",
                'source_hash': content_hash(orig_content),
                'last_crawl': None,
            }

        entry = status[url_key]

        # translation_statusが既に設定済みの場合 → outdated チェック
        if entry.get('translation_status') in ('machine', 'reviewed'):
            translated_hash = entry.get('translated_source_hash', '')
            current_hash = entry.get('source_hash', '')

            if not translated_hash:
                # translated_source_hash が未設定 → 現在のsource_hashで初期化
                entry['translated_source_hash'] = current_hash
                already_exists += 1
            elif current_hash and translated_hash != current_hash:
                # ハッシュが異なる → outdated
                entry['translation_status'] = 'outdated'
                initialized += 1
            else:
                already_exists += 1
            continue

        # docs/に対応ファイルがあるか確認
        docs_file = find_docs_file(url_key)
        if docs_file:
            docs_content = docs_file.read_text(encoding='utf-8')
            entry['translation_status'] = detect_translation_status(docs_content)
            entry['docs_path'] = str(docs_file.relative_to(DOCS_DIR)).replace('\\', '/')
        else:
            entry['translation_status'] = 'not_translated'
            entry['docs_path'] = None

        initialized += 1

    # 保存
    with open(STATUS_FILE, 'w', encoding='utf-8') as f:
        json.dump(status, f, indent=2, ensure_ascii=False)

    # サマリー
    print()
    print("=" * 50)
    print("SUMMARY")
    print("=" * 50)
    print(f"Initialized:     {initialized}")
    print(f"Already existed: {already_exists}")
    print()

    # カバー率
    total = len(status)
    translated = sum(1 for v in status.values() if v.get('translation_status') in ('machine', 'reviewed'))
    machine = sum(1 for v in status.values() if v.get('translation_status') == 'machine')
    reviewed = sum(1 for v in status.values() if v.get('translation_status') == 'reviewed')
    not_translated = sum(1 for v in status.values() if v.get('translation_status') == 'not_translated')

    print(f"Total pages:     {total}")
    print(f"Translated:      {translated} ({translated/total*100:.0f}%)" if total else "")
    print(f"  - Machine:     {machine}")
    print(f"  - Reviewed:    {reviewed}")
    print(f"Not translated:  {not_translated}")
    print()
    print(f"Saved to {STATUS_FILE}")

    return 0


if __name__ == "__main__":
    exit(main())
