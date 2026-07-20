# Build and Test Summary (Run 3)

## Build Status
- **Build Tool**: npm + Docusaurus 3.9.2
- **Build Status**: ✅ Success
- **Build Time**: ~2.5 seconds (cached)

## Vulnerability Fix Results

| Severity | Initial | After All Runs | Change |
|---|---|---|---|
| Critical | 1 | **0** | -1 ✅ |
| High | 12 | **1** | -11 |
| Moderate | 34 | **22** | -12 |
| Low | 7 | **0** | -7 ✅ |
| **Total** | **54** | **23** | **-31** |

## Remaining Vulnerabilities Detail

### 残存原因の概要

残存する23件の脆弱性は、すべて**Docusaurus内部の依存チェーン**に起因しています。直接の依存パッケージ（`@docusaurus/core`等）が内部で使用するサブ依存に脆弱性があり、Docusaurus側が修正版をリリースしない限り解消できません。いずれも**ビルド時にのみ使用**され、本番の静的サイト（HTML/CSS/JS）には含まれません。

### High (1件)

| パッケージ | 脆弱性 | Advisory | 原因 |
|---|---|---|---|
| serialize-javascript (<=7.0.4) | RCE via RegExp.flags / CPU Exhaustion DoS | GHSA-5c6j-r48x-rmvq, GHSA-qj8w-gfj5-8c6v | `@docusaurus/bundler` → `copy-webpack-plugin` → `serialize-javascript`。Docusaurusが内部で使用するwebpackプラグインの依存。修正版が存在しない（No fix available） |

### Moderate (22件)

| パッケージ | 脆弱性 | Advisory | 原因 |
|---|---|---|---|
| uuid (<11.1.1) | バッファ境界チェック欠如 | GHSA-w5hq-g745-h8pq | `webpack-dev-server` → `sockjs` → `uuid`。開発サーバー専用の依存。修正するとwebpack-dev-serverのメジャーバージョンアップが必要 |
| @docusaurus/core 経由の間接依存 (20件) | serialize-javascriptの脆弱性が伝播 | — | `@docusaurus/core`が`serialize-javascript`に依存する`copy-webpack-plugin`と`css-minimizer-webpack-plugin`を使用。全Docusaurusプラグイン（preset-classic, plugin-content-blog, plugin-content-docs等）がcoreに依存するため、1件の脆弱性が20件としてカウントされている |

### なぜ修正できないのか

| 原因 | 説明 |
|---|---|
| **上流パッケージの未対応** | `serialize-javascript`の修正版（>7.0.4）が存在しない。パッケージメンテナーがまだ修正をリリースしていない |
| **Docusaurusの内部ロック** | `@docusaurus/bundler`が`copy-webpack-plugin`のバージョンを内部的にピン留めしており、ユーザー側で差し替えできない |
| **間接依存の連鎖** | 1つの脆弱パッケージ（serialize-javascript）にDocusaurusの全プラグインが間接的に依存するため、件数が膨らんでいる（実質2系統の問題） |
| **開発専用パッケージ** | uuid/sockjs/webpack-dev-serverは開発時（`npm start`）にのみ使用。ビルド成果物には含まれない |

### リスク判定

- **本番環境への影響**: なし（すべてビルド時/開発時のみ）
- **エンドユーザーへの影響**: なし（静的HTMLには脆弱パッケージのコードが含まれない）
- **今後の対応**: Docusaurusの次期アップデート（v4等）で解消される見込み。Dependabotが自動監視中

---

## Visual Regression Test

| テスト | 結果 | 備考 |
|---|---|---|
| トップページ | ⚠️ 683px差分 → 許容 | ユーザー確認済み、ベースライン更新 |
| ドキュメントページ | ✅ Pass | — |
| フレームワークページ | ✅ Pass | — |
| ブログ一覧ページ | ✅ Pass | — |
| ナビゲーション | ✅ Pass | — |

## Security Compliance (SECURITY-10)

| Check | Status |
|---|---|
| Lock file exists and committed | ✅ |
| Vulnerability scanning configured (Dependabot) | ✅ |
| No unused dependencies | ✅ |
| Official registry only | ✅ |
| No `latest` tags in CI | ✅ |

## Overall Status
- **Build**: ✅ Success
- **Visual Regression**: ✅ All accepted
- **Security**: ✅ SECURITY-10 Compliant
- **Ready for Deploy**: Yes
