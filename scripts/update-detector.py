#!/usr/bin/env python3
"""
Update Detector for FinOps Foundation Content

このスクリプトは、翻訳済みコンテンツの元ページをチェックし、
更新があった場合にGitHub Issueを作成します。
"""

import os
import json
import hashlib
from pathlib import Path
from typing import Dict, List
import requests
from bs4 import BeautifulSoup
from github import Github

# 設定
STATUS_FILE = Path(".translation-status.json")
DOCS_DIR = Path("docs")


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
    
    # メインコンテンツを抽出
    main_content = soup.find('main') or soup.find('article') or soup.body
    
    if main_content:
        text = main_content.get_text(strip=True)
        return hashlib.sha256(text.encode()).hexdigest()
    return ""


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


def check_for_updates() -> List[Dict]:
    """翻訳済みページの更新をチェック"""
    status = load_translation_status()
    updates = []
    
    for path, info in status.items():
        if not info.get('translated'):
            continue
        
        source_url = info.get('source_url')
        if not source_url:
            continue
        
        print(f"Checking {path}...")
        
        # 現在のコンテンツを取得
        html = get_page_content(source_url)
        if not html:
            continue
        
        current_hash = extract_content_hash(html)
        stored_hash = info.get('source_hash', '')
        
        # ハッシュ値を比較
        if current_hash and current_hash != stored_hash:
            updates.append({
                'path': path,
                'url': source_url,
                'old_hash': stored_hash,
                'new_hash': current_hash
            })
            
            # ステータスを更新
            info['source_hash'] = current_hash
            info['last_checked'] = __import__('datetime').datetime.now().isoformat()
            info['needs_update'] = True
        else:
            info['last_checked'] = __import__('datetime').datetime.now().isoformat()
            info['needs_update'] = False
    
    # ステータスを保存
    save_translation_status(status)
    
    return updates


def create_github_issue(updates: List[Dict]):
    """GitHub Issueを作成"""
    if not updates:
        print("No updates found.")
        return
    
    github_token = os.getenv('GITHUB_TOKEN')
    if not github_token:
        print("GITHUB_TOKEN not found. Skipping issue creation.")
        return
    
    # リポジトリ情報を取得
    repo_name = os.getenv('GITHUB_REPOSITORY')
    if not repo_name:
        print("GITHUB_REPOSITORY not found.")
        return
    
    g = Github(github_token)
    repo = g.get_repo(repo_name)
    
    # Issue本文を作成
    issue_body = ["# FinOps Foundation コンテンツ更新検知\n"]
    issue_body.append(f"以下の{len(updates)}件の翻訳済みページで更新が検知されました。\n")
    
    for update in updates:
        issue_body.append(f"\n## {update['path']}")
        issue_body.append(f"- ソースURL: {update['url']}")
        issue_body.append(f"- ローカルファイル: `{update['path']}`")
        issue_body.append(f"- 更新検知: ✅")
        issue_body.append(f"\n翻訳の更新が必要です。")
    
    issue_body.append(f"\n---")
    issue_body.append(f"\n自動生成: {__import__('datetime').datetime.now().isoformat()}")
    
    # Issueを作成
    try:
        issue = repo.create_issue(
            title=f"翻訳更新必要: {len(updates)}件のページで更新検知",
            body="\n".join(issue_body),
            labels=["translation", "update-needed"]
        )
        print(f"✅ Issue created: {issue.html_url}")
    except Exception as e:
        print(f"Error creating issue: {e}")


def main():
    """メイン処理"""
    print("🔍 翻訳済みページの更新をチェック中...")
    
    updates = check_for_updates()
    
    if updates:
        print(f"\n⚠️  {len(updates)}件の更新を検知しました:")
        for update in updates:
            print(f"  - {update['path']}")
        
        # GitHub Issueを作成
        create_github_issue(updates)
    else:
        print("\n✅ すべてのページは最新です!")
    
    # GitHub Actions用の出力
    if os.getenv('GITHUB_ACTIONS'):
        summary = f"## 更新チェック結果\n\n"
        if updates:
            summary += f"⚠️ {len(updates)}件の更新を検知\n\n"
            for update in updates:
                summary += f"- {update['path']}\n"
        else:
            summary += "✅ すべてのページは最新です\n"
        
        with open(os.getenv('GITHUB_STEP_SUMMARY', '/dev/null'), 'a') as f:
            f.write(summary)
    
    print("\n✅ 完了!")


if __name__ == "__main__":
    main()
