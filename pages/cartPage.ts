import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly proceedToCheckoutButton: Locator;
  readonly cartItems: Locator;
  readonly removeItemButton: Locator;
  readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.proceedToCheckoutButton = page.locator('.btn:has-text("Proceed To Checkout")');
    this.cartItems = page.locator('#cart_items');
    this.removeItemButton = page.locator('.cart_quantity_delete');
    this.emptyCartMessage = page.locator('#empty_cart');
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }

  async removeItemFromCart() {
    await this.removeItemButton.click();
  }

  async isProductInCart(productName: string): Promise<boolean> {
    return await this.page.locator(`.cart_info >> text=${productName}`).isVisible();
  }
}
