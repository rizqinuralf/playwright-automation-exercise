# 🎭 Playwright Automation Portfolio (TypeScript)

This portfolio demonstrates end-to-end UI automation using [Playwright](https://playwright.dev/) with **TypeScript**, targeting the sample e-commerce website [Automation Exercise](https://automationexercise.com/). The goal is to showcase modern automation best practices, clean code structure, and scalable test design.

## 🧪 Project Overview

- **Framework**: [Playwright](https://playwright.dev/)
- **Language**: TypeScript
- **Test Runner**: Playwright Test
- **Target Website**: [automationexercise.com](https://automationexercise.com/)
- **Purpose**: Practice, showcase, and develop real-world automation testing skills.

## 📁 Folder Structure

```
├── config/              # Environtment settings
│   └── .env
├── library/             # Library for storing user's generation data
│   └── userCreation.ts
├── pages/               # Page Object Model (POM) classes
│   ├── dashboardPage.ts
│   ├── loginPage.ts
│   └── signUpPage.ts
├── test/                # Test specifications
│   └── signUp.test.ts
├── playwright.config.ts # Playwright configuration
├── tsconfig.json        # TypeScript config
└── package.json         # Project dependencies and scripts
```

## ✅ Test Cases Included
Some of the test cases are taken from [here](https://automationexercise.com/test_cases)
- ✔️ Register user
- ✔️ Login with valid/invalid credentials
- ✔️ Browse and search for products
- ✔️ Add/remove items from the cart
- ✔️ Checkout flow simulation
- ✔️ UI verification (elements, texts, errors)


## 🌐 Website Under Test

The test suite is written against [Automation Exercise](https://automationexercise.com/), a public e-commerce site for automation practice. All test cases are created purely for educational and demonstration purposes.


## 📌 Key Features

- Built with Playwright’s robust and modern API
- Clean Page Object Model (POM) for maintainability
- Detailed test reports using Playwright's built-in reporter
- TypeScript for static typing and better tooling
- Reusable utility functions and test data patterns


## 📖 Future Improvements

- CI/CD integration (e.g., GitHub Actions)


---

Feel free to fork, clone, or suggest improvements. Happy testing! 🧪✨
