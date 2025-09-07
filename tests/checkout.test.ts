import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { LoginPage } from '../pages/loginPage';
import { SignUpPage } from '../pages/signUpPage';
import { generateUser } from '../library/userCreation';
import { Dashboard } from '../pages/dashboardPage';

test.describe('Checkout flow simulation', () => {
  let productsPage: ProductsPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let loginPage: LoginPage;
  let signUpPage: SignUpPage;
  let dashboard: Dashboard;


  test('Checkout a product', async ({ page }) => {
    const user = generateUser();
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    loginPage = new LoginPage(page);
    signUpPage = new SignUpPage(page);
    dashboard = new Dashboard(page);

    await page.goto('/');
    console.log(`Registering user with email: ${user.email} and password: ${user.password}`);
    await dashboard.loginButton.click();
    await loginPage.signUpAccess(user);
    await signUpPage.signUpProcess(user);

        await productsPage.addToCart('Blue Top');
    await expect(productsPage.productAddedModal).toBeVisible();
    await expect(productsPage.productAddedSuccessMessage).toBeVisible();
    await productsPage.viewCartLinkInModal.click();
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('https://automationexercise.com/checkout');
    await checkoutPage.placeOrder();
    await expect(page).toHaveURL('https://automationexercise.com/payment');
    await checkoutPage.fillPaymentDetails('Test Card', '4100000000000000', '123', '01', '2025');
    await page.waitForLoadState('networkidle');
    await expect(checkoutPage.orderConfirmationMessage).toBeVisible();
    await dashboard.deleteAccountButton.click();
    await expect(signUpPage.accountDeletedMessage).toBeVisible();
  });
});