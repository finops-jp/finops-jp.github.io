import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('トップページ', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('top-page.png', {
      maxDiffPixels: 100,
      fullPage: true,
    });
  });

  test('ドキュメントページ（FinOpsとは）', async ({ page }) => {
    await page.goto('/docs/introduction/what-is-finops');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('docs-what-is-finops.png', {
      maxDiffPixels: 100,
      fullPage: true,
    });
  });

  test('フレームワークページ', async ({ page }) => {
    await page.goto('/docs/framework');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('docs-framework.png', {
      maxDiffPixels: 100,
      fullPage: true,
    });
  });

  test('ブログ一覧ページ', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('blog-list.png', {
      maxDiffPixels: 100,
      fullPage: true,
    });
  });

  test('ナビゲーション（ヘッダー）', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const header = page.locator('nav.navbar');
    await expect(header).toHaveScreenshot('navigation-header.png', {
      maxDiffPixels: 50,
    });
  });
});
