#!/usr/bin/env python3
"""
FinOps Foundation Content Batch Extractor

サイトマップからURLを自動発見し、英語版Markdownとしてorig/に保存します。
- ハッシュ比較で変更がなければスキップ
- リダイレクト検知で旧パスを削除扱い
"""

import sys
import os
import re

# Windows環境でUTF-8出力を強制
if sys.platform == 'win32':
    os.environ.setdefault('PYTHONIOENCODING', 'utf-8')

sys.path.append(os.path.dirname(__file__))

from pathlib import Path
import time
import json
import hashlib
import xml.etree.ElementTree as ET
import requests

from extract_content import extract_main_content

STATUS_FILE = Path(".translation-status.json")


def load_config():
    """設定ファイルを読み込み"""
    config_path = Path(__file__).parent / 'crawl-config.json'
    with open(config_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_config(config):
    """設定ファイルを保存"""
    config_path = Path(__file__).parent / 'crawl-config.json'
    with open(config_path, 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2, ensure_ascii=False)


def load_status():
    """翻訳状態ファイルを読み込み"""
    if STATUS_FILE.exists():
        with open(STATUS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def save_status(status):
    """翻訳状態ファイルを保存"""
    with open(STATUS_FILE, 'w', encoding='utf-8') as f:
        json.dump(status, f, indent=2, ensure_ascii=False)


def discover_urls(config):
    """サイトマップからURLを自動発見 + 手動追加URLをマージ"""
    discover_config = config['discover']
    sitemaps = discover_config['sitemaps']
    include_patterns = discover_config['includePatterns']
    exclude_patterns = discover_config.get('excludePatterns', [])
    base_url = config['baseUrl']

    ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    all_urls = []

    for sitemap_url in sitemaps:
        try:
            r = requests.get(sitemap_url, timeout=10)
            r.raise_for_status()
            root = ET.fromstring(r.text)
            urls = [loc.text for loc in root.findall('.//s:url/s:loc', ns)]
            all_urls.extend(urls)
        except Exception as e:
            print(f"  Warning: Could not fetch {sitemap_url}: {e}")

    # フィルタリング
    filtered = []
    for url in all_urls:
        path = url.replace(base_url, '')

        # includeパターンにマッチするか
        included = any(path.startswith(p) or re.search(p, path) for p in include_patterns)
        if not included:
            continue

        # excludeパターンにマッチしないか
        excluded = any(re.search(p, path) for p in exclude_patterns)
        if excluded:
            continue

        filtered.append(url)

    # 手動追加URLをマージ
    additional = config.get('additionalUrls', [])
    for path in additional:
        url = base_url.rstrip('/') + path
        if url not in filtered:
            filtered.append(url)

    return sorted(set(filtered))


def content_hash(content):
    """コンテンツのSHA-256ハッシュを返す"""
    return hashlib.sha256(content.encode('utf-8')).hexdigest()


def url_to_key(url, base_url):
    """URLからステータスキーを生成"""
    path = url.replace(base_url, '').strip('/')
    return path


def key_to_output_path(key, output_dir):
    """ステータスキーから出力ファイルパスを生成"""
    parts = key.split('/')

    if len(parts) == 1:
        return Path(output_dir) / parts[0] / "index.md"
    else:
        dir_path = Path(output_dir) / '/'.join(parts[:-1])
        file_name = f"{parts[-1]}.md"
        return dir_path / file_name


def fetch_with_redirect_check(url):
    """URLにアクセスし、リダイレクトを検知。(最終URL, content) を返す"""
    response = requests.get(url, timeout=15, allow_redirects=True)
    response.raise_for_status()
    final_url = response.url
    return final_url, response


def process_url(url, base_url, output_dir, status, force=False):
    """
    単一URLを処理。
    Returns: ('updated', 'skipped', 'redirected', 'deleted', 'error')
    """
    key = url_to_key(url, base_url)

    try:
        # リダイレクト検知付きでアクセス
        final_url, response = fetch_with_redirect_check(url)
        final_key = url_to_key(final_url, base_url)

        # リダイレクトが発生した場合
        if final_key != key:
            print(f"    → Redirected: {key} → {final_key}")

            # 旧パスのファイルを削除
            old_path = key_to_output_path(key, output_dir)
            if old_path.exists():
                old_path.unlink()
                print(f"    → Removed old file: {old_path}")

            # 旧エントリを削除扱いに
            if key in status:
                status[key]['translation_status'] = 'deleted'
                status[key]['redirected_to'] = final_key

            # 新しいキーで処理を続行
            key = final_key
            url = final_url

        # コンテンツを抽出
        from extract_content import extract_main_content as _extract
        from bs4 import BeautifulSoup
        import html2text

        # response.contentを直接使う（再リクエスト不要）
        content = _extract_from_response(response)

        if not content:
            print(f"    → Empty content")
            return 'error'

        # ハッシュ比較でスキップ判定
        new_hash = content_hash(content)
        if not force and key in status and status[key].get('source_hash') == new_hash:
            return 'skipped'

        # 出力ファイルパスを生成して保存
        output_path = key_to_output_path(key, output_dir)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(content)

        # ステータスを更新
        if key not in status:
            status[key] = {}
        status[key]['source_url'] = base_url.rstrip('/') + '/' + key + '/'
        status[key]['source_hash'] = new_hash
        status[key]['last_crawl'] = __import__('datetime').datetime.now().isoformat()

        print(f"    → Saved: {output_path}")
        return 'updated'

    except requests.exceptions.HTTPError as e:
        if e.response is not None and e.response.status_code == 404:
            print(f"    → 404 Not Found (deleted)")
            # 削除扱い
            old_path = key_to_output_path(key, output_dir)
            if old_path.exists():
                old_path.unlink()
                print(f"    → Removed old file: {old_path}")
            if key in status:
                status[key]['translation_status'] = 'deleted'
            return 'deleted'
        print(f"    → HTTP Error: {e}")
        return 'error'

    except Exception as e:
        print(f"    → Error: {e}")
        return 'error'


def _extract_from_response(response):
    """requests.Responseからコンテンツを抽出（再リクエストせず）"""
    from bs4 import BeautifulSoup
    import html2text
    from extract_content import (
        remove_basic_unwanted_elements,
        extract_content_by_markers
    )

    soup = BeautifulSoup(response.content, 'html.parser')
    remove_basic_unwanted_elements(soup)

    h = html2text.HTML2Text()
    h.ignore_links = False
    h.ignore_images = False
    h.body_width = 0
    h.ignore_emphasis = False
    h.skip_internal_links = False
    h.inline_links = True
    h.protect_links = True
    h.mark_code = True

    full_markdown = h.handle(str(soup))
    main_content = extract_content_by_markers(full_markdown)

    return main_content


def main():
    """メイン処理"""
    import argparse
    parser = argparse.ArgumentParser(description='Batch extract FinOps content')
    parser.add_argument('--force', action='store_true',
                        help='Force re-download all pages (ignore hash cache)')
    args = parser.parse_args()

    print("FinOps Foundation Content Batch Extractor")
    print("=" * 60)

    # 設定を読み込み
    config = load_config()
    base_url = config['baseUrl']
    output_dir = config['outputDir']

    # サイトマップからURL自動発見
    print("Discovering URLs from sitemaps...")
    urls = discover_urls(config)
    print(f"Found {len(urls)} URLs matching filters")
    if args.force:
        print("(--force: skipping hash comparison)")
    print()

    # ステータスを読み込み
    status = load_status()

    # 統計情報
    stats = {'updated': 0, 'skipped': 0, 'redirected': 0, 'deleted': 0, 'error': 0}

    # 処理
    for i, url in enumerate(urls, 1):
        key = url_to_key(url, base_url)
        print(f"[{i}/{len(urls)}] {key}")

        result = process_url(url, base_url, output_dir, status, force=args.force)
        stats[result] = stats.get(result, 0) + 1

        # レート制限（1秒間隔）
        time.sleep(1)

    # ステータスを保存
    save_status(status)

    # 設定ファイルに最終実行時刻を記録
    from datetime import datetime
    config['lastCrawl'] = datetime.now().isoformat()
    save_config(config)

    # 結果サマリー
    print()
    print("=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"Total URLs:   {len(urls)}")
    print(f"Updated:      {stats['updated']}")
    print(f"Skipped:      {stats['skipped']}")
    print(f"Redirected:   {stats['redirected']}")
    print(f"Deleted:      {stats['deleted']}")
    print(f"Errors:       {stats['error']}")
    print()
    print("Done!")


if __name__ == "__main__":
    main()
