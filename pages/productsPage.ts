import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly allProductsList: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly viewProductButton: Locator;
  readonly addToCartButton: Locator;
  readonly categorySidebar: Locator;
  readonly brandsSidebar: Locator;
  readonly productAddedModal: Locator;
  readonly productAddedSuccessMessage: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLinkInModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductsList = page.locator('.features_items');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.viewProductButton = page.locator('a:has-text("View Product")');
    this.addToCartButton = page.locator('.add-to-cart');
    this.categorySidebar = page.locator('.left-sidebar .category-products');
    this.brandsSidebar = page.locator('.left-sidebar .brands_products');
    this.productAddedModal = page.locator('.modal-content');
    this.productAddedSuccessMessage = page.getByText('Your product has been added to cart.');
    this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
    this.viewCartLinkInModal = page.locator('u:has-text("View Cart")');
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async viewProduct(productName: string) {
    await this.page.locator(`.product-image-wrapper:has-text("${productName}")`).locator('a:has-text("View Product")').click();
  }

  async hoverProduct(productName: string) {
    await this.page.locator(`.product-image-wrapper:has-text("${productName}")`).hover();
  }

  async addToCart(productName: string) {
    const productCard = this.page.locator('.features_items .product-image-wrapper', { hasText: productName });
    await productCard.hover();
    const addToCartButton = productCard.locator('.overlay-content .add-to-cart');
    await addToCartButton.waitFor({ state: 'visible' });
    await addToCartButton.click();
  }
}
