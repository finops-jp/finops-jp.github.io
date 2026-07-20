# Requirements — 脆弱性対策 (Run 2)

## Intent Analysis Summary
- **User Request**: 脆弱性対策（Visual Regression Extension含む、--force含む追加対応）
- **Request Type**: Upgrade + Testing Infrastructure
- **Scope Estimate**: Single Component + Testing
- **Complexity Estimate**: Moderate（破壊的変更の可能性あり）

---

## Functional Requirements

### FR-01: 全レベルの脆弱性修正（--force含む）
- `npm audit fix --force` を含め、可能な限りすべての脆弱性を修正する
- 破壊的変更が発生する場合はビルド確認＋Visual Regression Testで検証する
- 修正不可能な脆弱性は文書化する

### FR-02: Visual Regression Testing のセットアップと実行
- Playwrightをインストールし、画面テスト環境を構築する
- 変更前のベースラインスクリーンショットを撮影する
- 変更後に比較テストを実行し、意図しない見た目の変化を検出する

### FR-03: ビルド確認
- パッケージ更新後に`npm run build`が成功することを確認する
- ビルド失敗の場合は破壊的変更を切り分けて対応する

---

## Non-Functional Requirements

### NFR-01: サイトの視覚的整合性
- Visual Regression Testで閾値（maxDiffPixels: 100）を超える変化がないことを確認
- 変化がある場合は意図的かどうかを判断し、文書化する

---

## Constraints
- 対応深刻度: 全レベル（--force含む）
- Visual Regression Testing: 有効
- Security Extension: 有効（SECURITY-10準拠）
- Resiliency Extension: スキップ
- Property-Based Testing: スキップ

---

## Extension Configuration

| Extension | Enabled | Decided At |
|---|---|---|
| Security Baseline | Yes | Requirements Analysis |
| Visual Regression Testing | Yes | Requirements Analysis |
| Resiliency Baseline | No | Requirements Analysis |
| Property-Based Testing | No | Requirements Analysis |

---

## Success Criteria
1. `npm audit`で脆弱性が最大限修正される
2. `npm run build`が成功する
3. Visual Regression Testでベースラインとの差分が閾値以内
4. 修正不可能な脆弱性がリスクとして文書化される
