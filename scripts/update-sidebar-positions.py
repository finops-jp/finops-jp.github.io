#!/usr/bin/env python3
"""
Update sidebar_position in docs frontmatter.

docs/framework/capabilities/index.md と docs/framework/domains/index.md の
リンク順から sidebar_position を決定し、各ファイルの frontmatter に付与します。
"""

import re
import sys
from pathlib import Path

DOCS_DIR = Path("docs")


def get_link_order(index_file):
    """index.md のリンク順からスラッグのリストを返す"""
    content = index_file.read_text(encoding='utf-8')
    links = re.findall(r'\]\(([a-z0-9-]+)\)', content)
    slugs = []
    for slug in links:
        if slug not in slugs:
            slugs.append(slug)
    return slugs


def update_frontmatter_position(file_path, position):
    """ファイルの frontmatter に sidebar_position を追加/更新"""
    content = file_path.read_text(encoding='utf-8')

    if not content.startswith('---'):
        # frontmatter がない場合は追加
        content = f"---\nsidebar_position: {position}\n---\n\n" + content
        file_path.write_text(content, encoding='utf-8')
        return True

    # frontmatter を解析
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False

    frontmatter = parts[1]
    body = parts[2]

    # sidebar_position が既にあれば更新
    if 'sidebar_position:' in frontmatter:
        frontmatter = re.sub(
            r'sidebar_position:\s*\d+',
            f'sidebar_position: {position}',
            frontmatter
        )
    else:
        # なければ追加
        frontmatter = frontmatter.rstrip('\n') + f'\nsidebar_position: {position}\n'

    content = '---' + frontmatter + '---' + body
    file_path.write_text(content, encoding='utf-8')
    return True


def process_directory(dir_path, index_file):
    """ディレクトリ内のファイルに sidebar_position を付与"""
    if not index_file.exists():
        print(f"  Warning: {index_file} not found")
        return 0

    slugs = get_link_order(index_file)
    if not slugs:
        print(f"  Warning: No links found in {index_file}")
        return 0

    updated = 0
    for i, slug in enumerate(slugs, 1):
        file_path = dir_path / f"{slug}.md"
        if file_path.exists():
            if update_frontmatter_position(file_path, i):
                print(f"  {i:3d}. {slug}")
                updated += 1
        else:
            print(f"  {i:3d}. {slug} (file not found, skipping)")

    # index.md 自体に position 0 を設定
    if index_file.exists():
        update_frontmatter_position(index_file, 0)

    return updated


def main():
    print("Updating sidebar positions...")
    print()

    total_updated = 0

    # capabilities
    print("[capabilities]")
    caps_dir = DOCS_DIR / "framework" / "capabilities"
    caps_index = caps_dir / "index.md"
    total_updated += process_directory(caps_dir, caps_index)
    print()

    # domains
    print("[domains]")
    doms_dir = DOCS_DIR / "framework" / "domains"
    doms_index = doms_dir / "index.md"
    total_updated += process_directory(doms_dir, doms_index)
    print()

    # framework top-level（手動で順番設定）
    print("[framework top-level]")
    framework_order = [
        'principles',
        'phases',
        'maturity-model',
        'scopes',
    ]
    fw_dir = DOCS_DIR / "framework"
    for i, slug in enumerate(framework_order, 1):
        file_path = fw_dir / f"{slug}.md"
        if file_path.exists():
            update_frontmatter_position(file_path, i + 1)  # index=0, personas=1 category
            print(f"  {i:3d}. {slug}")
            total_updated += 1

    print()
    print(f"Done! Updated {total_updated} files.")
    return 0


if __name__ == "__main__":
    exit(main())
