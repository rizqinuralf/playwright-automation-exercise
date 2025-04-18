import { Page,Locator } from "@playwright/test";

export class Navbar {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly productButton: Locator;
    readonly cartButton: Locator;
    readonly logoutButton: Locator;
    readonly deleteAccountButton: Locator;
    readonly loggedInAs: Locator;
  
    constructor(page: Page) {
        this.homeButton = page.locator('[href="/"]')
        this.productButton = page.locator('[href="/products"]')
        this.cartButton = page.locator('[href="/view_cart"]')
        this.logoutButton = page.locator('[href="/logout"]')
        this.deleteAccountButton = page.locator('[href="/delete_account"]')
        this.loggedInAs = page.locator('[class="fa fa-user"]')
    }
}