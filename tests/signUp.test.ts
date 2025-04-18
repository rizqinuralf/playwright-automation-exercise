import { test,expect } from '@playwright/test';
import { SignUpPage } from '../pages/signUpPage';
import { LoginPage } from '../pages/loginPage';
import { generateUser } from '../library/userCreation';

test('Sign Up a User', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUpPage(page);
  const user = generateUser()

  await loginPage.goto();
  await loginPage.signUpAccess(user);
  await signUpPage.signUpProcess(user);
  await expect(page.getByText(user.name)).toBeVisible();
});

