# テスト README

## 概要

本プロジェクトでは、Playwrightを使用したVisual Regression Test（画面スクリーンショット比較テスト）を実施しています。パッケージ更新やコード変更によってWebサイトの見た目が意図せず変わっていないかを検出します。

## テスト構成

```
tests/
└── visual/
    ├── visual-regression.spec.ts   ← テストスクリプト
    └── snapshots/                  ← ベースラインスクリーンショット（自動生成）
```

## テスト対象ページ

| # | テスト名 | 対象URL | 差分閾値 | スクリーンショット範囲 |
|---|---|---|---|---|
| 1 | トップページ | `/` | 100px | ページ全体 |
| 2 | ドキュメントページ（FinOpsとは） | `/docs/introduction/what-is-finops` | 100px | ページ全体 |
| 3 | フレームワークページ | `/docs/framework` | 100px | ページ全体 |
| 4 | ブログ一覧ページ | `/blog` | 100px | ページ全体 |
| 5 | ナビゲーション（ヘッダー） | `/`（nav.navbar要素のみ） | 50px | ヘッダー部分のみ |

## 実行方法

### 前提条件

- Node.js >= 18
- `npm ci` でパッケージインストール済み
- `npx playwright install chromium` でブラウザインストール済み
- `npm run build` でビルド済み

### テスト実行（ベースラインとの比較）

```bash
npm run test:visual
```

ビルド済みサイトをローカルサーバーで起動し（`npm run serve`、port 3000）、各ページのスクリーンショットをベースラインと比較します。

### ベースライン更新

```bash
npm run test:visual:update
```

現在のサイト状態でスクリーンショットを撮影し、ベースラインとして`tests/visual/snapshots/`に保存します。意図的なデザイン変更後に実行してください。

## テストの動作

1. Playwright が `npm run serve` でローカルサーバーを自動起動（playwright.config.ts の webServer 設定）
2. Chromiumブラウザで各ページにアクセス
3. `networkidle`（ネットワークリクエスト完了）まで待機
4. スクリーンショットを撮影
5. `tests/visual/snapshots/`内のベースライン画像とピクセル単位で比較
6. 差分が閾値（maxDiffPixels）を超えた場合、テスト失敗

## テスト失敗時の確認方法

差分検出時、以下のファイルが`test-results/`に保存されます：

| ファイル | 内容 |
|---|---|
| `*-expected.png` | ベースライン（変更前） |
| `*-actual.png` | 現在のスクリーンショット（変更後） |
| `*-diff.png` | 差分箇所をハイライトした画像 |

HTMLレポートで詳細を確認できます：

```bash
npx playwright show-report
```

## 判断基準

- **差分が意図的**（デザイン変更、レイアウト改善等）→ `npm run test:visual:update` でベースライン更新
- **差分が意図しない**（崩れ、要素の欠落等）→ コード変更をロールバックして原因を調査

## 社内環境での注意事項

- Chromiumインストール時にSSLエラーが出る場合：`$env:NODE_TLS_REJECT_UNAUTHORIZED="0"` を設定してから `npx playwright install chromium`
- ポート3000が使用中の場合：`netstat -ano | findstr :3000` で確認し、`taskkill /PID xxx /F` で停止
