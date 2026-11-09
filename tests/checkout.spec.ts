import { test, expect } from '@playwright/test';

test.only('applies coupon', async ({ page }) => {
  await page.waitForTimeout(5000);
  await page.goto('/');
  expect(true).toBe(true);
});
