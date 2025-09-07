import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';

test.describe('Cart functionality', () => {
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await page.goto('/products');
  });

  test('Add a product to the cart', async ({ page }) => {
    await productsPage.addToCart('Blue Top');
    await expect(productsPage.productAddedModal).toBeVisible();
    await expect(productsPage.productAddedSuccessMessage).toBeVisible();
    await productsPage.continueShoppingButton.click();
  });

  test('Remove a product from the cart', async ({ page }) => {
    // Add product first
    await productsPage.addToCart('Blue Top');
    await productsPage.viewCartLinkInModal.click(); // Click view cart

    await expect(cartPage.cartItems).toBeVisible();
    await expect(cartPage.isProductInCart('Blue Top')).toBeTruthy();

    await cartPage.removeItemFromCart();
    await expect(cartPage.emptyCartMessage).toBeVisible();
    await expect(cartPage.emptyCartMessage).toContainText('Cart is empty!');
  });
});