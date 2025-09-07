import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/productsPage';

test.describe('Browse and search for products', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await page.goto('/products');
  });

  test('Search for a product', async ({ page }) => {
    await productsPage.searchProduct('Blue Top');
    const products = await page.locator('.features_items .product-image-wrapper').allTextContents();
    expect(products.join()).toContain('Blue Top');
  });
});
