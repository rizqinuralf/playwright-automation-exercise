import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly placeOrderButton: Locator;
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payAndConfirmOrderButton: Locator;
  readonly orderConfirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeOrderButton = page.locator('.btn:has-text("Place Order")');
    this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expiryMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expiryYearInput = page.locator('[data-qa="expiry-year"]');
    this.payAndConfirmOrderButton = page.locator('[data-qa="pay-button"]');
    this.orderConfirmationMessage = page.getByText('Congratulations! Your order has been confirmed!');
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails(cardName: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string) {
    await this.nameOnCardInput.fill(cardName);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(expiryMonth);
    await this.expiryYearInput.fill(expiryYear);
    await this.payAndConfirmOrderButton.click();
  }
}
