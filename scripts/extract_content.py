#!/usr/bin/env python3

import sys
import io

# Windows環境でUTF-8出力を強制
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

import requests
from bs4 import BeautifulSoup
import html2text

def extract_main_content(url):
    """URLからメインコンテンツを抽出してMarkdownに変換"""
    
    # HTMLを取得
    response = requests.get(url)
    response.raise_for_status()
    
    # BeautifulSoupでパース
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # 基本的な不要要素を除去
    remove_basic_unwanted_elements(soup)
    
    # html2textでMarkdownに変換
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
    
    # メインコンテンツ部分を抽出
    main_content = extract_content_by_markers(full_markdown)
    
    return main_content

def remove_basic_unwanted_elements(soup):
    """基本的な不要要素のみ除去"""
    
    # YouTube動画の処理（削除前に処理）
    process_youtube_elements(soup)
    
    unwanted_selectors = [
        'script', 'style', 'noscript', 'nav', 'header', 'footer',
        # モーダル関連
        '[class*="modal"]', '[id*="modal"]',
        # 提案・フィードバック関連
        '[onclick*="modal"]', 'button[aria-label*="Close"]',
        # hiddenクラスがついているh1を除去
        'h1.hidden'
    ]
    
    for selector in unwanted_selectors:
        for element in soup.select(selector):
            element.decompose()

def process_youtube_elements(soup):
    """YouTube要素をリンクに変換"""
    processed_ids = set()  # 重複処理を避ける
    
    # まずnoscriptタグ内のYouTube iframeを処理
    noscript_tags = soup.find_all('noscript')
    for noscript in noscript_tags:
        iframes = noscript.find_all('iframe')
        for iframe in iframes:
            src = iframe.get('src', '')
            if 'youtube.com/embed/' in src:
                # video IDを抽出
                video_id = src.split('/embed/')[-1].split('?')[0]
                processed_ids.add(video_id)
                
                # YouTube watch URLに変換
                watch_url = f"https://www.youtube.com/watch?v={video_id}"
                
                # リンクを作成
                link = soup.new_tag('p')
                link.string = f"[YouTube: What is FinOps?]({watch_url})"
                
                # noscriptタグを置換
                noscript.replace_with(link)
                break
    
    # rll-youtube-playerクラスの要素を処理（重複していない場合のみ）
    youtube_players = soup.find_all('div', class_='rll-youtube-player')
    
    for player in youtube_players:
        data_src = player.get('data-src')
        data_id = player.get('data-id')
        
        # 既に処理済みかチェック
        if data_id and data_id in processed_ids:
            player.decompose()  # 重複なので削除
            continue
        
        if data_src or data_id:
            # video IDを抽出
            if data_id:
                video_id = data_id
            elif data_src:
                video_id = data_src.split('/embed/')[-1].split('?')[0]
            else:
                continue
            
            # YouTube watch URLに変換
            watch_url = f"https://www.youtube.com/watch?v={video_id}"
            
            # リンクを作成
            link = soup.new_tag('p')
            link.string = f"[YouTube: What is FinOps?]({watch_url})"
            
            # 元の要素を置換
            player.replace_with(link)

def extract_content_by_markers(markdown_text):
    """マーカーを使ってメインコンテンツを抽出"""
    lines = markdown_text.split('\n')
    
    start_idx = 0
    end_idx = len(lines)
    
    # 開始位置を探す：最初のh1（# で始まる行）
    for i, line in enumerate(lines):
        if line.strip().startswith('# ') and len(line.strip()) > 2:
            start_idx = i
            break
    
    # パンくずナビを除去
    for i, line in enumerate(lines):
        if '[Framework Overview]' in line or '/ FinOps' in line:
            lines[i] = ""
    
    # 相対パスの画像を絶対パスに変換
    for i, line in enumerate(lines):
        if '![](/wp-content/' in line:
            lines[i] = line.replace('![](/wp-content/', '![](https://www.finops.org/wp-content/')

    # finops.org内の相対パスリンクを絶対URLに変換
    import re
    for i, line in enumerate(lines):
        # (</framework/...>) → (<https://www.finops.org/framework/...>)
        lines[i] = re.sub(
            r'\(<(/[^>]+)>\)',
            r'(<https://www.finops.org\1>)',
            lines[i]
        )
        # (/framework/...) or (/wg/...) etc → (https://www.finops.org/...)
        lines[i] = re.sub(
            r'\((/(?:framework|introduction|assets|wg|insights|community|training-certification|join|membership)/[^)]*)\)',
            r'(https://www.finops.org\1)',
            lines[i]
        )
    
    # 終了マーカーのパターン  
    end_markers = [
        "Make Suggestions",
        "Suggest a Resource", 
        "Explore FinOps Topics",
        "Related Content",
        "Additional Resources",
        "© FinOps Foundation",
    ]
    
    # 終了位置を探す
    for i in range(start_idx, len(lines)):
        for marker in end_markers:
            if marker in lines[i]:
                end_idx = i
                break
        if end_idx < len(lines):
            break
    
    # メインコンテンツを抽出（連続する空行のみ除去）
    if start_idx < end_idx:
        content_lines = lines[start_idx:end_idx]
        
        # 連続する空行を1つにまとめる
        cleaned_lines = []
        prev_empty = False
        
        for line in content_lines:
            if line.strip() == "":
                if not prev_empty:
                    cleaned_lines.append("")
                prev_empty = True
            else:
                cleaned_lines.append(line)
                prev_empty = False
        
        return '\n'.join(cleaned_lines).strip()
    else:
        return '\n'.join(lines).strip()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract-content.py <URL>")
        sys.exit(1)
    
    url = sys.argv[1]
    
    try:
        markdown = extract_main_content(url)
        print(markdown)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)
