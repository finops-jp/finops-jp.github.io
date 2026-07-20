# Dependencies

## Vulnerability Summary

**Total: 54 vulnerabilities**
- Critical: 1
- High: 12
- Moderate: 34
- Low: 7

## Critical Vulnerabilities

| パッケージ | 脆弱性 | Advisory |
|---|---|---|
| shell-quote (1.1.0 - 1.8.3) | quote()がobject .op値の改行をエスケープしない | GHSA-w7jw-789q-3m8p |

## High Vulnerabilities

| パッケージ | 脆弱性 | Advisory |
|---|---|---|
| @babel/plugin-transform-modules-systemjs | 悪意のある入力コンパイル時に任意コード生成 | GHSA-fv7c-fp4j-7gwp |
| fast-uri (<=3.1.1) | パーセントエンコードによるパストラバーサル、ホスト混乱 | GHSA-q3j6-qgpj-74h6, GHSA-v39h-62p7-jpjc |
| lodash (<=4.17.23) | コードインジェクション、プロトタイプ汚染 | GHSA-r5fr-rjxr-66jc, GHSA-f23m-r3pf-42rh, GHSA-xxjr-mmjv-4gpg |
| minimatch (<=3.1.3) | ReDoS（複数パターン） | GHSA-3ppc-4f35-3m26, GHSA-7r86-cg39-jmmj, GHSA-23c5-xmqv-rm74 |
| node-forge (<=1.3.3) | 証明書検証バイパス、署名偽造、DoS | GHSA-2328-f5f3-gj25, GHSA-q67f-28xg-22rw, GHSA-5m6q-g25r-mvwx, GHSA-ppp5-5v6c-4jwp |
| path-to-regexp (<0.1.13) | ReDoS（ルートパラメータ） | GHSA-37ch-88jc-xwx2 |
| picomatch (<=2.3.1) | メソッドインジェクション、ReDoS | GHSA-3v7f-55p6-f55p, GHSA-c2c7-rcm5-vvqj |
| serialize-javascript (<=7.0.4) | RCE、CPU枯渇DoS | GHSA-5c6j-r48x-rmvq, GHSA-qj8w-gfj5-8c6v |
| svgo (3.0.0 - 3.3.2) | エンティティ展開によるDoS（Billion Laughs） | GHSA-xpqw-6gx7-v673 |
| ws (7.0.0 - 8.20.1) | メモリ未初期化開示、メモリ枯渇DoS | GHSA-58qx-3vcg-4xpx, GHSA-96hv-2xvq-fx4p |
| webpack (5.49.0 - 5.104.0) | SSRF（allowedUrisバイパス） | GHSA-8fgc-7cc6-rx7x, GHSA-38r7-794h-5758 |

## Moderate Vulnerabilities (主要なもの)

| パッケージ | 脆弱性 |
|---|---|
| ajv (<6.14.0, 7.x-8.x) | ReDoS ($dataオプション使用時) |
| brace-expansion (<1.1.13) | ゼロステップシーケンスによるハング |
| follow-redirects (<=1.15.11) | カスタム認証ヘッダーのリーク |
| http-proxy-middleware (0.16.0-2.0.10) | Hostヘッダーによるバックエンドルーティングバイパス |
| joi (<17.13.4) | 深いネストによるRangeError |
| js-yaml (<=3.14.2, 4.0.0-4.1.1) | マージキーの二次計算量DoS |
| postcss (<8.5.10) | XSS（</style>未エスケープ） |
| qs (<=6.15.1) | arrayLimitバイパスによるDoS |
| uuid (<11.1.1) | バッファ境界チェック欠如 |
| yaml (1.0.0-1.10.2) | 深いネストによるスタックオーバーフロー |

## Breaking Change Required

以下のパッケージは`npm audit fix --force`が必要（破壊的変更の可能性）：
- **serialize-javascript**: 修正により@docusaurus/coreが3.5.2にダウングレードされる

## Dependency Tree（脆弱性の伝播）

```
@docusaurus/core (^3.9.2)
├── serialize-javascript → RCE, DoS (HIGH)
├── webpack → SSRF (HIGH)  
├── webpack-dev-server → ws (HIGH), sockjs/uuid (MODERATE)
├── express → path-to-regexp (HIGH), body-parser/qs (MODERATE)
├── postcss → XSS (MODERATE)
├── @docsearch/react → ai-sdk chain (LOW)
├── @babel/core → Arbitrary File Read (LOW)
└── @babel/plugin-transform-modules-systemjs → Code Gen (HIGH)
```

## Fix Strategy

- **`npm audit fix`（非破壊的）**: 大部分の脆弱性に対応可能
- **`npm audit fix --force`（破壊的）**: serialize-javascript関連のみ。Docusaurusのダウングレードが必要
- **推奨**: まず`npm audit fix`を実行し、残りは個別に判断
