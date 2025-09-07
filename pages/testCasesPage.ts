import { Page, Locator } from '@playwright/test';

export class TestCasesPage {
  readonly page: Page;
  readonly testCasesList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.testCasesList = page.locator('.panel-group');
  }
}
