# Project Overview

This is a Playwright-based end-to-end testing project for the website https://automationexercise.com. It uses TypeScript and follows the Page Object Model (POM) pattern.

**Key Technologies:**

*   **Framework:** Playwright
*   **Language:** TypeScript
*   **Package Manager:** npm
*   **Libraries:**
    *   `@playwright/test`: The core Playwright test runner.
    *   `@faker-js/faker`: For generating random test data.
    *   `dotenv`: For managing environment variables.

**Architecture:**

*   **`tests/`**: Contains the test files (e.g., `signUp.test.ts`).
*   **`pages/`**: Contains the page object files (e.g., `signUpPage.ts`, `loginPage.ts`). Each file represents a page on the website and encapsulates the locators and methods for interacting with that page.
*   **`library/`**: Contains helper functions, such as `userCreation.ts` for generating test data.
*   **`config/`**: Contains configuration files, such as `.env` for environment variables.
*   **`playwright.config.ts`**: The main configuration file for Playwright.

# Building and Running

**1. Install Dependencies:**

```bash
npm install
```

**2. Run Tests:**

To run the tests, use the following command:

```bash
npx playwright test
```

You can also run tests in specific browsers:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**3. Linting and Formatting:**

To check for linting errors, run:

```bash
npm run lint
```

To format the code, run:

```bash
npm run format
```

# Development Conventions

*   **Page Object Model (POM):** The project follows the POM pattern, where each page of the application has a corresponding class that contains the locators and methods for that page. This helps to keep the tests clean and maintainable.
*   **Data-Driven Testing:** The tests use the `@faker-js/faker` library to generate random data for each test run. This helps to ensure that the tests are not dependent on hardcoded data.
*   **Environment Variables:** The project uses a `.env` file to store environment variables, such as the base URL of the application. This allows for easy configuration of the tests for different environments.
*   **Coding Style:** The project uses Prettier for code formatting and ESLint for linting. Please run `npm run format` and `npm run lint` before committing any changes.
