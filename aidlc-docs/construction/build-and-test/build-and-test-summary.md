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

## Remaining Vulnerabilities — Full List

### High (1件)

| # | パッケージ | バージョン | 脆弱性 | Advisory | 依存チェーン |
|---|---|---|---|---|---|
| 1 | serialize-javascript | <=7.0.4 | RCE via RegExp.flags / CPU Exhaustion DoS | [GHSA-5c6j-r48x-rmvq](https://github.com/advisories/GHSA-5c6j-r48x-rmvq), [GHSA-qj8w-gfj5-8c6v](https://github.com/advisories/GHSA-qj8w-gfj5-8c6v) | @docusaurus/bundler → copy-webpack-plugin → serialize-javascript |

### Moderate (22件)

| # | パッケージ | バージョン | 脆弱性 | Advisory | 依存チェーン |
|---|---|---|---|---|---|
| 2 | uuid | <11.1.1 | バッファ境界チェック欠如 | [GHSA-w5hq-g745-h8pq](https://github.com/advisories/GHSA-w5hq-g745-h8pq) | webpack-dev-server → sockjs → uuid |
| 3 | sockjs | >=0.3.17 | uuid脆弱性の間接影響 | — | webpack-dev-server → sockjs |
| 4 | webpack-dev-server | 2.0.0-beta - 5.2.6 | sockjs脆弱性の間接影響 | — | @docusaurus/core → webpack-dev-server |
| 5 | copy-webpack-plugin | 6.1.1 - 13.0.1 | serialize-javascript脆弱性の間接影響 | — | @docusaurus/bundler → copy-webpack-plugin |
| 6 | css-minimizer-webpack-plugin | 1.1.4 - 7.0.4 | serialize-javascript脆弱性の間接影響 | — | @docusaurus/bundler → css-minimizer-webpack-plugin |
| 7 | @docusaurus/bundler | * | copy-webpack-plugin + css-minimizer依存 | — | @docusaurus/core → @docusaurus/bundler |
| 8 | @docusaurus/core | * | bundler + webpack-dev-server依存 | — | 直接依存（package.json） |
| 9 | @docusaurus/plugin-client-redirects | * | @docusaurus/core依存 | — | 直接依存 → @docusaurus/core |
| 10 | @docusaurus/plugin-content-blog | * | @docusaurus/core依存 | — | @docusaurus/core |
| 11 | @docusaurus/plugin-content-docs | * | @docusaurus/core依存 | — | @docusaurus/core |
| 12 | @docusaurus/plugin-content-pages | * | @docusaurus/core依存 | — | @docusaurus/core |
| 13 | @docusaurus/plugin-css-cascade-layers | * | @docusaurus/core依存 | — | @docusaurus/core |
| 14 | @docusaurus/plugin-debug | * | @docusaurus/core依存 | — | @docusaurus/core |
| 15 | @docusaurus/plugin-google-analytics | * | @docusaurus/core依存 | — | @docusaurus/core |
| 16 | @docusaurus/plugin-google-gtag | * | @docusaurus/core依存 | — | @docusaurus/core |
| 17 | @docusaurus/plugin-google-tag-manager | * | @docusaurus/core依存 | — | @docusaurus/core |
| 18 | @docusaurus/plugin-ideal-image | * | @docusaurus/core依存 | — | 直接依存 → @docusaurus/core |
| 19 | @docusaurus/plugin-sitemap | * | @docusaurus/core依存 | — | @docusaurus/core |
| 20 | @docusaurus/plugin-svgr | * | @docusaurus/core依存 | — | @docusaurus/core |
| 21 | @docusaurus/preset-classic | * | @docusaurus/core + 全プラグイン依存 | — | 直接依存 → @docusaurus/core |
| 22 | @docusaurus/theme-classic | * | @docusaurus/core依存 | — | @docusaurus/core |
| 23 | @docusaurus/theme-search-algolia | * | @docusaurus/core依存 | — | @docusaurus/core |

### 残存原因の概要

23件すべてが2つのルート原因に帰着する：

| ルート原因 | 影響パッケージ数 | 説明 |
|---|---|---|
| **serialize-javascript (<=7.0.4)** | 20件 | 修正版が存在しない。Docusaurusが内部で使用するwebpackプラグインの依存 |
| **uuid (<11.1.1)** | 3件 | webpack-dev-serverが古いバージョンのsockjs/uuidに依存。開発サーバー専用 |

### なぜ修正できないのか

| 原因 | 説明 |
|---|---|
| 上流パッケージの未対応 | serialize-javascript >7.0.4 が存在しない |
| Docusaurusの内部ロック | @docusaurus/bundlerがcopy-webpack-pluginのバージョンをピン留め |
| 間接依存の連鎖 | 1つの脆弱パッケージに全Docusaurusプラグインが間接依存 |
| 開発専用パッケージ | uuid/sockjs/webpack-dev-serverは`npm start`時のみ使用 |

### リスク判定

- **本番環境への影響**: なし（すべてビルド時/開発時のみ。静的HTMLには含まれない）
- **エンドユーザーへの影響**: なし
- **今後の対応**: Docusaurus v4アップデート時に解消見込み。Dependabotが自動監視中

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
