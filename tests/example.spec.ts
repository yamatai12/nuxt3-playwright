import { test, expect } from '@playwright/test';

test('title', async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle('Welcome to Nuxt!');
});
