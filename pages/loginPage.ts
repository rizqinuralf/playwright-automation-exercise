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
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(email:string, password:string){
    await this.goto()
    await expect(this.loginForm).toHaveText('Login to your account')
    await this.loginEmailField.fill(email)
    await this.passwordField.fill(password)
    await this.loginButton.click()
    await expect(this.page).toHaveURL('https://automationexercise.com/')
  }

  async signUpAccess(email:string, name:string){
    await this.goto()
    await expect(this.signUpButton).toBeVisible()
    await this.nameField.fill(name)
    await this.signUpEmailField.fill(email)
    await this.signUpButton.click()
    await expect(this.page).toHaveURL('https://automationexercise.com/signup')
  }

}