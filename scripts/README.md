# FinOps Translation Scripts

FinOps Foundation公式サイトのコンテンツを取得し、日本語翻訳を管理するためのスクリプト群です。

## 概要

```
finops.org (英語HTML)
    │  ① batch-extract.py
    ▼
orig/ (英語Markdown = スナップショット)
    │  ② AI翻訳（今後実装）
    ▼
docs/ (日本語Markdown = 公開コンテンツ)
```

## セットアップ

```bash
pip install -r scripts/requirements.txt
```

## スクリプト一覧

### extract_content.py — 単一ページ抽出

指定URLからメインコンテンツを抽出し、Markdownとして標準出力に表示します。

```bash
python scripts/extract_content.py https://www.finops.org/framework/principles/
```

### batch-extract.py — 一括抽出

`crawl-config.json` に定義された全URLを一括取得し、`orig/` に保存します。
前回と同じ内容のページはハッシュ比較でスキップされます。

```bash
python scripts/batch-extract.py
```

### init-status.py — 翻訳状態の初期登録

`orig/` と `docs/` を突き合わせて `.translation-status.json` を生成します。
初回セットアップ時に使用してください。

```bash
# 先にorig/を生成
python scripts/batch-extract.py

# 翻訳状態を初期登録
python scripts/init-status.py
```

## ファイル構成

```
scripts/
├── README.md              # このファイル
├── requirements.txt       # Python依存パッケージ
├── crawl-config.json      # クロール対象URL一覧
├── glossary.json          # 専門用語辞書
├── extract_content.py     # 単一ページ抽出
├── batch-extract.py       # 一括抽出（スキップ機構付き）
└── init-status.py         # 翻訳状態の初期登録
```

## 管理ファイル

| ファイル | 内容 |
|---|---|
| `crawl-config.json` | クロール対象のURL一覧と最終実行時刻 |
| `.translation-status.json` | 各ページの翻訳状態（ハッシュ、ステータス等） |
| `orig/` | 英語版Markdownのスナップショット |

## 翻訳ステータス

`.translation-status.json` の各エントリには以下のステータスが記録されます:

| ステータス | 意味 |
|---|---|
| `machine` | 機械翻訳のまま |
| `reviewed` | 人手で手直し済み |
| `not_translated` | 未翻訳 |
| `outdated` | オリジナルが更新されて再翻訳が必要（今後実装） |

## 対象URLの追加

`crawl-config.json` の `targetUrls` にURLパスを追加してください。

```json
{
  "targetUrls": {
    "framework": [
      "/framework/new-page/"
    ]
  }
}
```
