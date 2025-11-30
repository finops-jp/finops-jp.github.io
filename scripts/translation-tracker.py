#!/usr/bin/env python3
"""
Translation Tracker for FinOps Foundation Content

このスクリプトは、FinOps Foundation公式サイトのコンテンツと
ローカルの翻訳済みコンテンツを比較し、翻訳状態を追跡します。
"""

import os
import json
import hashlib
import re
from pathlib import Path
from typing import Dict, List, Set
import requests
from bs4 import BeautifulSoup
import yaml

# 設定
FINOPS_BASE_URL = "https://www.finops.org"
DOCS_DIR = Path("docs")
STATUS_FILE = Path(".translation-status.json")

# FinOps.orgのメインセクション
MAIN_SECTIONS = [
    "/framework/",
    "/framework/capabilities/",
    "/framework/personas/",
    "/framework/domains/",
    "/assets/",
    "/wg/",
]


def get_page_content(url: str) -> str:
    """指定されたURLからページコンテンツを取得"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""


def extract_content_hash(html: str) -> str:
    """HTMLコンテンツからハッシュ値を生成"""
    soup = BeautifulSoup(html, 'html.parser')
    
    # メインコンテンツを抽出(サイト構造に依存)
    main_content = soup.find('main') or soup.find('article') or soup.body
    
    if main_content:
        text = main_content.get_text(strip=True)
        return hashlib.sha256(text.encode()).hexdigest()
    return ""


def discover_finops_pages() -> List[Dict[str, str]]:
    """FinOps.orgから翻訳対象ページを発見"""
    pages = []
    
    # framework配下のページを取得
    framework_url = f"{FINOPS_BASE_URL}/framework/"
    html = get_page_content(framework_url)
    
    if html:
        soup = BeautifulSoup(html, 'html.parser')
        
        # リンクを抽出
        for link in soup.find_all('a', href=True):
            href = link['href']
            
            # framework配下のページのみ
            if href.startswith('/framework/'):
                full_url = f"{FINOPS_BASE_URL}{href}"
                
                # 既に追加済みかチェック
                if not any(p['url'] == full_url for p in pages):
                    # パスからファイル名を推測
                    path = href.strip('/').replace('/', '/') + '.md'
                    
                    pages.append({
                        'url': full_url,
                        'path': path,
                        'title': link.get_text(strip=True)
                    })
    
    return pages


def scan_local_translations() -> Dict[str, Dict]:
    """ローカルの翻訳済みファイルをスキャン"""
    translations = {}
    
    for md_file in DOCS_DIR.rglob("*.md"):
        rel_path = md_file.relative_to(DOCS_DIR)
        
        # frontmatterから英語版URLを抽出
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # frontmatterを抽出
            if content.startswith('---'):
                parts = content.split('---', 2)
                if len(parts) >= 3:
                    # 英語版リンクを探す
                    match = re.search(r'\[英語版\]:\s*(.+)', parts[2])
                    if match:
                        source_url = match.group(1).strip()
                        
                        translations[str(rel_path)] = {
                            'source_url': source_url,
                            'local_path': str(md_file),
                            'exists': True
                        }
        except Exception as e:
            print(f"Error reading {md_file}: {e}")
    
    return translations


def load_translation_status() -> Dict:
    """翻訳状態ファイルを読み込み"""
    if STATUS_FILE.exists():
        with open(STATUS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def save_translation_status(status: Dict):
    """翻訳状態ファイルを保存"""
    with open(STATUS_FILE, 'w', encoding='utf-8') as f:
        json.dump(status, f, indent=2, ensure_ascii=False)


def generate_report(
    discovered_pages: List[Dict],
    local_translations: Dict,
    status: Dict
) -> str:
    """翻訳状態レポートを生成"""
    
    report = ["# FinOps Foundation 翻訳状態レポート\n"]
    report.append(f"生成日時: {__import__('datetime').datetime.now().isoformat()}\n")
    
    # 統計
    total_pages = len(discovered_pages)
    translated_pages = len(local_translations)
    untranslated_pages = total_pages - translated_pages
    
    report.append("\n## 統計\n")
    report.append(f"- 総ページ数: {total_pages}")
    report.append(f"- 翻訳済み: {translated_pages}")
    report.append(f"- 未翻訳: {untranslated_pages}")
    report.append(f"- 翻訳率: {translated_pages/total_pages*100:.1f}%\n")
    
    # 未翻訳ページリスト
    if untranslated_pages > 0:
        report.append("\n## 未翻訳ページ\n")
        
        translated_urls = {t['source_url'] for t in local_translations.values()}
        
        for page in discovered_pages:
            if page['url'] not in translated_urls:
                report.append(f"- [ ] [{page['title']}]({page['url']})")
    
    # 翻訳済みページリスト
    report.append("\n## 翻訳済みページ\n")
    for path, info in sorted(local_translations.items()):
        report.append(f"- [x] {path}")
        report.append(f"  - ソース: {info['source_url']}")
    
    return "\n".join(report)


def main():
    """メイン処理"""
    print("🔍 FinOps Foundation翻訳状態をチェック中...")
    
    # ローカルの翻訳をスキャン
    print("📁 ローカルの翻訳ファイルをスキャン中...")
    local_translations = scan_local_translations()
    print(f"   {len(local_translations)}件の翻訳ファイルを発見")
    
    # 翻訳状態を読み込み
    status = load_translation_status()
    
    # 簡易的な発見リスト(実際にはもっと詳細にスキャン)
    # ここでは既存の翻訳ファイルから逆算
    discovered_pages = []
    for path, info in local_translations.items():
        discovered_pages.append({
            'url': info['source_url'],
            'path': path,
            'title': path
        })
    
    # レポート生成
    print("📊 レポートを生成中...")
    report = generate_report(discovered_pages, local_translations, status)
    
    # 結果を出力
    print("\n" + "="*60)
    print(report)
    print("="*60)
    
    # GitHub Actions用の出力
    if os.getenv('GITHUB_ACTIONS'):
        with open(os.getenv('GITHUB_STEP_SUMMARY', '/dev/null'), 'a') as f:
            f.write(report)
    
    print("\n✅ 完了!")


if __name__ == "__main__":
    main()
