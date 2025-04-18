import { test,expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignUpPage } from '../pages/signUpPage';
import { LoginPage } from '../pages/loginPage';
import { Navbar } from '../pages/navbar';


let email = `${faker.internet.email()}`;
let firstName = `${faker.name.firstName()}`;
let lastName = `${faker.name.lastName()}`;
let name = `${firstName} ${lastName}`;
let password = `${faker.internet.password()}`
let companyName = `${faker.company.name()}`
let address = `${faker.address.streetAddress()}`
let mobileNumber = `${faker.phone.number()}`


test('Sign Up a User', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const signUpPage = new SignUpPage(page);
  const navbar = new Navbar(page)

  await loginPage.goto();
  await loginPage.signUpAccess(email,name);
  await signUpPage.signUpProcess(1,password,'1','May','2000',firstName,lastName,companyName,address,'Singapore','Singapore','Singapore','821310',mobileNumber);
  await expect(page.getByText(name)).toBeVisible();
});

