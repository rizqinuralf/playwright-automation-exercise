import { test, expect } from '@playwright/test';
import { Dashboard } from '../pages/dashboardPage';

test.describe('UI Verification', () => {
  let dashboard: Dashboard;

  test.beforeEach(async ({ page }) => {
    dashboard = new Dashboard(page);
    await page.goto('/');
  });

  test('Verify home page elements', async ({ page }) => {
    await expect(dashboard.homePageLogo).toBeVisible();
    await expect(dashboard.featuresItemsHeading).toBeVisible();
    await expect(dashboard.recommendedItemsHeading).toBeVisible();
    await expect(dashboard.subscriptionHeading).toBeVisible();
  });
});