import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/signUpPage';
import { LoginPage } from '../pages/loginPage';
import { generateUser } from '../library/userCreation';
import { Dashboard } from '../pages/dashboardPage';

test.describe.configure({ mode: 'serial' });
test.describe('Running Test Cases from Automation Exercise', () => {
  let loginPage: LoginPage;
  let signUpPage: SignUpPage;
  let dashboard: Dashboard;

  const user = generateUser();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    signUpPage = new SignUpPage(page);
    dashboard = new Dashboard(page);

  })
  test('Register User', async ({ page }) => {

    await page.goto('/');
    await expect(
      page.locator('img[alt="Website for automation practice"]')
    ).toBeVisible();
    await dashboard.loginButton.click();
    await loginPage.signUpAccess(user);
    await signUpPage.signUpProcess(user);
    await dashboard.deleteAccountButton.click();
    await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
    await signUpPage.continueButton.click();
  });


});
