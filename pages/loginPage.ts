import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginForm: Locator;
  readonly loginEmailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly signUpForm: Locator;
  readonly nameField: Locator;
  readonly signUpEmailField: Locator;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginForm = page.locator('.login-form');
    this.loginEmailField = page.locator('[data-qa="login-email"]');
    this.passwordField = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.signUpForm = page.locator('.signup-form');
    this.nameField = page.locator('[data-qa="signup-name"]');
    this.signUpEmailField = page.locator('[data-qa="signup-email"]');
    this.signUpButton = page.locator('[data-qa="signup-button"]');
    this.errorMessage = page.locator('p[style="color: red;"]');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(userData:any){
    await expect(this.loginForm).toBeVisible();
    await this.loginEmailField.fill(userData.email)
    await this.passwordField.fill(userData.password)
    await this.loginButton.click()
  }

  async signUpAccess(userData:any){
    // await this.goto()
    await expect(this.page.getByText('New User Signup!')).toBeVisible()
    await expect(this.signUpButton).toBeVisible()
    await this.nameField.fill(userData.name)
    await this.signUpEmailField.fill(userData.email)
    await this.signUpButton.click()
    await expect(this.page).toHaveURL('https://automationexercise.com/signup')
  }

}