# Component Inventory

## Application Packages
- f2jc-website - Docusaurus静的サイト（メインアプリケーション）

## Infrastructure Packages
- .github/workflows/gh-pages.yaml - GitHub Actions - ビルド＆デプロイパイプライン
- .github/workflows/auto-translate.yaml - GitHub Actions - 翻訳自動化
- .github/workflows/check-translation-status.yaml - GitHub Actions - 翻訳ステータスチェック
- .github/workflows/check-updates.yaml - GitHub Actions - 更新チェック

## Shared Packages
- scripts/ - Python - 翻訳管理スクリプト（ai-translator.py, translation-tracker.py, update-detector.py）

## Test Packages
- src/utils/__tests__/ - Jest型定義あり - ユーティリティテスト（1ファイルのみ）

## Total Count
- **Total Packages**: 1（npmパッケージとして）
- **Application**: 1
- **Infrastructure**: 4（GitHub Actions workflows）
- **Shared**: 1（scripts/）
- **Test**: 1（最小限）
