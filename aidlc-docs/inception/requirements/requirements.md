# Requirements — 脆弱性対策 (Run 3)

## Intent Analysis Summary
- **User Request**: 脆弱性対策（3回目の実行）
- **Request Type**: Upgrade + Testing
- **Scope Estimate**: Single Component + Testing
- **Complexity Estimate**: Moderate

---

## Functional Requirements

### FR-01: 全脆弱性の修正（--force含む）
- `npm audit fix --force` を実行し、すべての脆弱性を可能な限り修正する
- 破壊的変更（Docusaurusダウングレード等）が発生する可能性あり
- Visual Regression Testで見た目の変化を検証した上で判断する

### FR-02: Visual Regression Testing（既存ベースライン使用）
- 既存のベースラインスクリーンショット（Run 2で脆弱性対策実行前に撮影済み）を理想状態として使用
- 新たなベースライン撮影は行わない
- 変更後に比較テストを実行し、意図しない見た目の変化を検出する

### FR-03: ビルド確認
- パッケージ更新後に`npm run build`が成功することを確認する

---

## Non-Functional Requirements

### NFR-01: サイトの視覚的整合性
- 既存ベースラインとの差分が閾値（maxDiffPixels: 100）以内であること

---

## Constraints
- 対応深刻度: 全レベル（--force含む、破壊的変更許容）
- Visual Regression: 既存ベースライン使用（撮り直しなし）
- Security Extension: 有効
- Resiliency Extension: スキップ
- Property-Based Testing: スキップ

---

## Extension Configuration

| Extension | Enabled | Decided At |
|---|---|---|
| Security Baseline | Yes | Requirements Analysis |
| Visual Regression Testing | Yes (existing baseline) | Requirements Analysis |
| Resiliency Baseline | No | Requirements Analysis |
| Property-Based Testing | No | Requirements Analysis |

---

## Success Criteria
1. `npm audit fix --force`で脆弱性が最大限修正される
2. `npm run build`が成功する
3. Visual Regression Testで既存ベースラインとの差分が閾値以内
4. SECURITY-10 Compliant
