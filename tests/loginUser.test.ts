import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { Dashboard } from '../pages/dashboardPage';
import { generateUser } from '../library/userCreation';
import { SignUpPage } from '../pages/signUpPage';

test.describe.configure({ mode: 'serial' });
test.describe('Login User', () => {
  let loginPage: LoginPage;
  let dashboard: Dashboard;
  let signUpPage: SignUpPage;

  const user = generateUser();
  const wrongUser = generateUser();

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboard = new Dashboard(page);
    signUpPage = new SignUpPage(page);
  });

  test('Login User with correct email and password', async ({ page }) => {
    await page.goto('/');
    await expect(dashboard.homePageLogo).toBeVisible();
    await dashboard.loginButton.click();
    await loginPage.signUpAccess(user);
    await signUpPage.signUpProcess(user);
    await dashboard.logoutButton.click();
    await loginPage.goto();
    await loginPage.login(user);
    await expect(dashboard.loggedInAs).toBeVisible();
    await dashboard.deleteAccountButton.click();
    await expect(signUpPage.accountDeletedMessage).toBeVisible();
    await signUpPage.continueButton.click();
  });

  test('Login User with incorrect email and password', async ({ page }) => {
    await loginPage.goto();
    await loginPage.login(wrongUser);
    await expect(loginPage.errorMessage).toHaveText('Your email or password is incorrect!');
  });
});