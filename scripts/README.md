# FinOps Translation Scripts

このディレクトリには、FinOps Foundationコンテンツの日本語翻訳を管理するためのスクリプトが含まれています。

## 概要

3つの主要な機能を提供します:

1. **翻訳状態の追跡** (`translation-tracker.py`)
2. **更新の検知** (`update-detector.py`)
3. **AI翻訳** (`ai-translator.py`)

## セットアップ

### 前提条件

- Python 3.11以上
- GitHub Actions環境(推奨)

### ローカル環境での実行(オプション)

```bash
# 依存パッケージのインストール
pip install -r requirements.txt
```

## 使用方法

### 1. 翻訳状態の確認

ローカルの翻訳ファイルをスキャンし、翻訳状態をレポートします。

```bash
python scripts/translation-tracker.py
```

**GitHub Actions:**
- ワークフロー: `.github/workflows/check-translation-status.yaml`
- トリガー: 手動実行 または 週次自動実行

### 2. 更新の検知

翻訳済みページの元ページをチェックし、更新があればGitHub Issueを作成します。

```bash
python scripts/update-detector.py
```

**GitHub Actions:**
- ワークフロー: `.github/workflows/check-updates.yaml`
- トリガー: 手動実行 または 週次自動実行(日曜日)

### 3. AI翻訳

指定されたFinOps.orgのページを日本語に翻訳します。

```bash
python scripts/ai-translator.py --url https://www.finops.org/framework/principles/
```

**GitHub Actions:**
- ワークフロー: `.github/workflows/auto-translate.yaml`
- トリガー: 手動実行のみ
- 入力: 翻訳するページのURL

## GitHub Actionsでの使用

### 必要な設定

#### リポジトリ設定

1. Settings > Actions > General
2. "Workflow permissions" を "Read and write permissions" に設定
3. "Allow GitHub Actions to create and approve pull requests" をチェック

#### Secrets

**追加のSecretsは不要です!** GitHub Actionsの`GITHUB_TOKEN`のみで動作します。

### ワークフローの実行方法

#### 翻訳状態チェック

1. Actions タブを開く
2. "Check Translation Status" を選択
3. "Run workflow" をクリック

#### 更新検知

1. Actions タブを開く
2. "Check Updates" を選択
3. "Run workflow" をクリック

#### AI翻訳

1. Actions タブを開く
2. "Auto Translate" を選択
3. "Run workflow" をクリック
4. 翻訳するページのURLを入力
   - 例: `https://www.finops.org/framework/principles/`
5. "Run workflow" をクリック

翻訳が完了すると、自動的にプルリクエストが作成されます。

## ファイル構成

```
scripts/
├── README.md              # このファイル
├── requirements.txt       # Python依存パッケージ
├── glossary.json         # 専門用語辞書
├── translation-tracker.py # 翻訳状態追跡スクリプト
├── update-detector.py    # 更新検知スクリプト
└── ai-translator.py      # AI翻訳スクリプト
```

## 専門用語辞書

`glossary.json`には、FinOps専門用語の翻訳ルールが定義されています。

新しい用語を追加する場合:

```json
{
  "English Term": "日本語訳",
  ...
}
```

## トラブルシューティング

### GitHub Actionsで権限エラーが発生する

リポジトリ設定で "Workflow permissions" が "Read and write permissions" になっているか確認してください。

### 翻訳が失敗する

- GitHub Modelsのレート制限に達している可能性があります
- しばらく待ってから再試行してください

### PRが作成されない

- "Allow GitHub Actions to create and approve pull requests" がチェックされているか確認してください

## 開発

### スクリプトの修正

スクリプトを修正した場合は、ローカルでテストしてからコミットしてください。

```bash
# テスト実行
python scripts/translation-tracker.py
python scripts/update-detector.py
python scripts/ai-translator.py --url https://www.finops.org/framework/principles/
```

### 新機能の追加

新しいスクリプトを追加する場合:

1. `scripts/`ディレクトリに配置
2. `requirements.txt`に必要なパッケージを追加
3. このREADMEを更新
4. 対応するGitHub Actionsワークフローを作成

## ライセンス

このプロジェクトは、リポジトリのライセンスに従います。

## サポート

問題が発生した場合は、GitHubのIssueを作成してください。
