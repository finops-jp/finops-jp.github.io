# visual-regression.spec.ts 解説

## ファイルの役割

`tests/visual/visual-regression.spec.ts` は、Playwrightを使ったVisual Regression Test（画面スクリーンショット比較テスト）のテストスクリプトです。サイトの主要ページのスクリーンショットを撮影し、このディレクトリ（`snapshots/`）に保存されたベースライン画像と比較します。

---

## コード構造

```typescript
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('テスト名', async ({ page }) => {
    await page.goto('対象URL');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('ファイル名.png', { オプション });
  });
});
```

### 各行の意味

| コード | 説明 |
|---|---|
| `import { test, expect }` | Playwrightのテスト関数とアサーション関数を読み込み |
| `test.describe(...)` | テストグループを定義（まとめて管理するため） |
| `test('テスト名', ...)` | 個別のテストケースを定義 |
| `page.goto('URL')` | 指定URLにブラウザでアクセス |
| `page.waitForLoadState('networkidle')` | ネットワークリクエストが完了するまで待機（画像やフォントの読み込み完了を待つ） |
| `expect(page).toHaveScreenshot(...)` | ページ全体のスクリーンショットをベースラインと比較 |
| `page.locator('nav.navbar')` | 特定の要素（CSSセレクタ）を指定 |
| `expect(header).toHaveScreenshot(...)` | 要素単位のスクリーンショットを比較 |

---

## テストケース詳細

### 1. トップページ

```typescript
test('トップページ', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('top-page.png', {
    maxDiffPixels: 100,
    fullPage: true,
  });
});
```

- **対象**: サイトのルート（`/`）
- **範囲**: ページ全体（`fullPage: true`）
- **閾値**: 100ピクセルまでの差分は許容

### 2. ドキュメントページ（FinOpsとは）

```typescript
test('ドキュメントページ（FinOpsとは）', async ({ page }) => {
  await page.goto('/docs/introduction/what-is-finops');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('docs-what-is-finops.png', {
    maxDiffPixels: 100,
    fullPage: true,
  });
});
```

- **対象**: ドキュメントページの代表例
- **目的**: サイドバー、コンテンツ領域、マークダウンレンダリングの変化を検出

### 3. フレームワークページ

```typescript
test('フレームワークページ', async ({ page }) => {
  await page.goto('/docs/framework');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('docs-framework.png', {
    maxDiffPixels: 100,
    fullPage: true,
  });
});
```

- **対象**: ドキュメントのトップカテゴリページ
- **目的**: カテゴリ一覧表示やカード型レイアウトの変化を検出

### 4. ブログ一覧ページ

```typescript
test('ブログ一覧ページ', async ({ page }) => {
  await page.goto('/blog');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveScreenshot('blog-list.png', {
    maxDiffPixels: 100,
    fullPage: true,
  });
});
```

- **対象**: ブログ記事の一覧ページ
- **目的**: 記事カード、日付表示、サムネイルの表示崩れを検出

### 5. ナビゲーション（ヘッダー）

```typescript
test('ナビゲーション（ヘッダー）', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const header = page.locator('nav.navbar');
  await expect(header).toHaveScreenshot('navigation-header.png', {
    maxDiffPixels: 50,
  });
});
```

- **対象**: ナビゲーションバー（`nav.navbar`要素のみ）
- **範囲**: ページ全体ではなく、ヘッダー部分のみ
- **閾値**: 50ピクセル（他テストより厳しい — ナビゲーションは全ページ共通なので変化に敏感に検出したい）

---

## オプション解説

| オプション | 値 | 意味 |
|---|---|---|
| `maxDiffPixels` | 100 or 50 | 許容する差分ピクセル数。これを超えるとテスト失敗 |
| `fullPage` | true | ビューポート内だけでなくページ全体（スクロール含む）を撮影 |

---

## このディレクトリについて

このディレクトリ（`visual-regression.spec.ts-snapshots/`）には、Playwrightが自動生成するベースラインスクリーンショットが保存されます。

ファイル命名規則：`{スクリーンショット名}-{ブラウザ}-{OS}.png`

例：
- `top-page-chromium-win32.png`
- `docs-what-is-finops-chromium-win32.png`
- `navigation-header-chromium-win32.png`

これらのファイルがテスト実行時の比較基準（ベースライン）となります。
