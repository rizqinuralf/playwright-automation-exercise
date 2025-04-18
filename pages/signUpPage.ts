import { Page, Locator, expect } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;
  readonly signUpForm: Locator;
  readonly mrTitleRadioButton: Locator;
  readonly mrsTitleRadioButton: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly dayOfBirth: Locator;
  readonly monthOfBirth: Locator;
  readonly yearOfBirth: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly companyNameField: Locator;
  readonly addressField: Locator;
  readonly furtherAddressField: Locator;
  readonly countryField: Locator;
  readonly stateField: Locator;
  readonly cityField: Locator;
  readonly zipCodeField: Locator;
  readonly mobileNumberField: Locator;
  readonly createAccountButton: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpForm = page.locator('.login-form');
    this.mrTitleRadioButton = page.locator('#uniform-id_gender1');
    this.mrsTitleRadioButton = page.locator('#uniform-id_gender2');
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#email');
    this.passwordField = page.locator('#password');
    this.dayOfBirth = page.locator('#days');
    this.monthOfBirth = page.locator('#months');
    this.yearOfBirth = page.locator('#years');
    this.firstNameField = page.locator('#first_name');
    this.lastNameField = page.locator('#last_name');
    this.companyNameField = page.locator('#company');
    this.addressField = page.locator('#address1');
    this.furtherAddressField = page.locator('#address2');
    this.countryField = page.locator('#country');
    this.stateField = page.locator('#state');
    this.cityField = page.locator('#city');
    this.zipCodeField = page.locator('#zipcode');
    this.mobileNumberField = page.locator('#mobile_number');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  /**
   * Choose between 2 titles.
   *
   * @param {number} option - The identifier used for selecting the correct file input field.
   * @type { 1: Mr, 2: Mrs }
   *
   * @example
   * await signUpPage.choosingTitle(1) - choosing Mr. as a Title;
   */
  async choosingTitle(option:number){
    if (option === 1) {
      await this.mrTitleRadioButton.click();
    } else if (option === 2) {
      await this.mrsTitleRadioButton.click();
    } else {
      throw new Error('Invalid option for title. Use 1 for Mr. or 2 for Mrs.');
    }
  }

  async signUpProcess(option:number, password:string, dayOfBirth:string, monthOfBirth:string, 
    yearOfBirth:string, firstName:string, lastName:string, companyName:string, address:string, country:string, 
    state:string, city:string, zipCode:string, mobileNumber:string){
    await this.choosingTitle(option);
    await this.passwordField.fill(password)
    await this.dayOfBirth.selectOption(dayOfBirth)
    await this.monthOfBirth.selectOption(monthOfBirth)
    await this.yearOfBirth.selectOption(yearOfBirth)
    await this.firstNameField.fill(firstName)
    await this.lastNameField.fill(lastName)
    await this.companyNameField.fill(companyName)
    await this.addressField.fill(address)
    await this.countryField.selectOption(country)
    await this.stateField.fill(state)
    await this.cityField.fill(city)
    await this.zipCodeField.fill(zipCode)
    await this.mobileNumberField.fill(mobileNumber)
    await this.createAccountButton.click()
    await expect(this.page).toHaveURL('https://automationexercise.com/account_created')
    await this.continueButton.click()
    await expect(this.page).toHaveURL('https://automationexercise.com/')
  }
}