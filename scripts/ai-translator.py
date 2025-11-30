#!/usr/bin/env python3
"""
AI Translator for FinOps Foundation Content

このスクリプトは、GitHub Models (Claude 3.5 Sonnet)を使用して
FinOps Foundationのコンテンツを日本語に翻訳します。
"""

import os
import json
import hashlib
import re
import argparse
from pathlib import Path
from typing import Dict, Optional
import requests
from bs4 import BeautifulSoup
import html2text
from datetime import datetime

# 設定
FINOPS_BASE_URL = "https://www.finops.org"
DOCS_DIR = Path("docs")
STATUS_FILE = Path(".translation-status.json")
GLOSSARY_FILE = Path("scripts/glossary.json")

# GitHub Models API設定
GITHUB_MODELS_API = "https://models.inference.ai.azure.com/chat/completions"
MODEL_NAME = "gpt-4o"  # GitHub Modelsで利用可能なモデル


def load_glossary() -> Dict[str, str]:
    """専門用語辞書を読み込み"""
    if GLOSSARY_FILE.exists():
        with open(GLOSSARY_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}


def get_page_content(url: str) -> tuple[str, str]:
    """指定されたURLからページコンテンツとタイトルを取得"""
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # タイトルを取得
        title = soup.find('h1')
        title_text = title.get_text(strip=True) if title else ""
        
        # メインコンテンツを抽出
        main_content = soup.find('main') or soup.find('article') or soup.body
        
        if main_content:
            # HTMLをMarkdownに変換
            h = html2text.HTML2Text()
            h.ignore_links = False
            h.ignore_images = False
            h.ignore_emphasis = False
            h.body_width = 0  # 行の折り返しを無効化
            
            markdown = h.handle(str(main_content))
            return markdown, title_text
        
        return "", title_text
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return "", ""


def translate_with_github_models(text: str, glossary: Dict[str, str], title: str = "") -> str:
    """GitHub Models APIを使用して翻訳"""
    
    github_token = os.getenv('GITHUB_TOKEN')
    if not github_token:
        raise ValueError("GITHUB_TOKEN environment variable is required")
    
    # 専門用語辞書をプロンプトに含める
    glossary_text = "\n".join([f"- {en}: {ja}" for en, ja in glossary.items()])
    
    prompt = f"""あなたはFinOps(クラウド財務管理)の専門家です。以下の英語のFinOps技術文書を日本語に翻訳してください。

# 翻訳ルール

1. **専門用語**: 以下の用語は必ずこの翻訳を使用してください
{glossary_text}

2. **Markdown構造**: 元のMarkdown構造を完全に保持してください
   - 見出しレベル(#, ##, ###など)
   - リスト(-, *, 1.など)
   - リンク([text](url))
   - 強調(**bold**, *italic*)
   - コードブロック

3. **翻訳品質**:
   - 自然で読みやすい日本語
   - 技術文書として正確
   - 文脈を理解した翻訳

4. **固有名詞**: 以下はそのまま英語で残す
   - FinOps
   - AWS, Azure, GCP などのクラウドプロバイダー名
   - 製品名、サービス名

# 翻訳対象

{text}

# 出力形式

翻訳されたMarkdownテキストのみを出力してください。説明や注釈は不要です。"""

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {github_token}"
    }
    
    payload = {
        "messages": [
            {
                "role": "system",
                "content": "あなたはFinOps技術文書の翻訳専門家です。正確で自然な日本語翻訳を提供します。"
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        "model": MODEL_NAME,
        "temperature": 0.3,
        "max_tokens": 4000
    }
    
    try:
        response = requests.post(
            GITHUB_MODELS_API,
            headers=headers,
            json=payload,
            timeout=60
        )
        response.raise_for_status()
        
        result = response.json()
        translated_text = result['choices'][0]['message']['content']
        
        return translated_text.strip()
    
    except Exception as e:
        print(f"Translation error: {e}")
        if hasattr(e, 'response'):
            print(f"Response: {e.response.text}")
        raise


def create_translated_document(
    source_url: str,
    translated_content: str,
    title: str
) -> str:
    """翻訳されたドキュメントを既存の形式で作成"""
    
    # frontmatterを作成
    frontmatter = f"""---
title: {title}
---

[英語版]: {source_url}

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

"""
    
    return frontmatter + translated_content


def get_output_path(source_url: str) -> Path:
    """ソースURLから出力パスを決定"""
    # URLからパスを抽出
    path = source_url.replace(FINOPS_BASE_URL, '').strip('/')
    
    # docsディレクトリ配下に配置
    if path.endswith('/'):
        output_path = DOCS_DIR / path / "index.md"
    else:
        output_path = DOCS_DIR / f"{path}.md"
    
    return output_path


def update_translation_status(source_url: str, output_path: Path, content_hash: str):
    """翻訳状態を更新"""
    status = {}
    if STATUS_FILE.exists():
        with open(STATUS_FILE, 'r', encoding='utf-8') as f:
            status = json.load(f)
    
    rel_path = str(output_path.relative_to(DOCS_DIR))
    
    status[rel_path] = {
        "translated": True,
        "source_url": source_url,
        "source_hash": content_hash,
        "translated_date": datetime.now().isoformat(),
        "last_checked": datetime.now().isoformat(),
        "needs_update": False
    }
    
    with open(STATUS_FILE, 'w', encoding='utf-8') as f:
        json.dump(status, f, indent=2, ensure_ascii=False)


def main():
    """メイン処理"""
    parser = argparse.ArgumentParser(description='Translate FinOps content to Japanese')
    parser.add_argument('--url', required=True, help='Source URL to translate')
    parser.add_argument('--output', help='Output file path (optional)')
    
    args = parser.parse_args()
    
    source_url = args.url
    
    print(f"🌐 ソースURL: {source_url}")
    
    # コンテンツを取得
    print("📥 コンテンツを取得中...")
    content, title = get_page_content(source_url)
    
    if not content:
        print("❌ コンテンツの取得に失敗しました")
        return 1
    
    print(f"📄 タイトル: {title}")
    print(f"📏 コンテンツサイズ: {len(content)} 文字")
    
    # 専門用語辞書を読み込み
    print("📚 専門用語辞書を読み込み中...")
    glossary = load_glossary()
    print(f"   {len(glossary)}件の用語を読み込みました")
    
    # 翻訳
    print("🤖 AI翻訳中 (GitHub Models)...")
    translated_content = translate_with_github_models(content, glossary, title)
    
    # ドキュメントを作成
    print("📝 ドキュメントを作成中...")
    document = create_translated_document(source_url, translated_content, title)
    
    # 出力パスを決定
    if args.output:
        output_path = Path(args.output)
    else:
        output_path = get_output_path(source_url)
    
    # ディレクトリを作成
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    # ファイルを保存
    print(f"💾 保存中: {output_path}")
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(document)
    
    # 翻訳状態を更新
    content_hash = hashlib.sha256(content.encode()).hexdigest()
    update_translation_status(source_url, output_path, content_hash)
    
    print(f"\n✅ 翻訳完了!")
    print(f"   出力ファイル: {output_path}")
    
    return 0


if __name__ == "__main__":
    exit(main())
