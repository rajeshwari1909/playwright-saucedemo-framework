# Playwright Automation Framework – SauceDemo

An interview/demo-ready end-to-end test automation framework built with **Playwright + JavaScript** against the SauceDemo sample web application.

SauceDemo is a Sauce Labs sample application designed for browser testing. Demo URL: https://www.saucedemo.com/

## Framework goals

- Maintainable Page Object Model (POM)
- Reusable custom fixtures
- External test data
- Reusable utility functions
- Multi-browser execution
- HTML reporting
- Screenshot, video and trace on failure
- Smoke/regression tagging
- GitHub Actions CI

## Project structure

```text
playwright-saucedemo-framework/
├── tests/
│   ├── login.spec.js
│   ├── inventory.spec.js
│   └── cart-checkout.spec.js
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── fixtures/
│   └── testFixture.js
├── test-data/
│   ├── users.json
│   └── checkout.json
├── utils/
│   └── helpers.js
├── .github/workflows/playwright.yml
├── playwright.config.js
├── package.json
└── README.md
```

## Design

```text
Test Specs
    ↓
Custom Fixtures
    ↓
Page Objects
    ↓
Playwright
    ↓
SauceDemo
```

Test data is separated from test logic, and reusable helper functions are kept in `utils`.

## Prerequisites

- Node.js 20+
- npm
- Git
- GitHub account

## Setup

```bash
npm install
npx playwright install
```

Optional environment configuration:

```bash
cp .env.example .env
```

The framework already defaults to SauceDemo, so `.env` is not required for local execution.

## Run all tests

```bash
npm test
```

## Run headed

```bash
npm run test:headed
```

## Run smoke tests

```bash
npm run test:smoke
```

## Run regression tests

```bash
npm run test:regression
```

## Debug

```bash
npm run test:debug
```

## View HTML report

```bash
npm run report
```

## Run a single file

```bash
npx playwright test tests/login.spec.js
```

## Run on one browser

```bash
npx playwright test --project=chromium
```

## Framework concepts demonstrated

### 1. Page Object Model

Page locators and page actions are encapsulated in the `pages` folder. Test files focus on business flows and assertions.

### 2. Custom fixtures

`fixtures/testFixture.js` creates reusable `loginPage`, `inventoryPage`, `cartPage`, `checkoutPage`, and `loggedInPage` fixtures.

### 3. Test data management

Credentials and checkout data are maintained as JSON files instead of being repeated throughout tests.

### 4. Configuration

`playwright.config.js` controls browsers, base URL, retries, timeouts, reporting and failure artifacts.

### 5. Failure diagnostics

Screenshots are captured on failure. Videos and traces are retained on failure.

### 6. CI/CD

GitHub Actions runs the suite on pushes and pull requests and stores the HTML report as a workflow artifact.

## Demo flow for an interview

1. Explain the folder structure.
2. Open `playwright.config.js` and explain configuration.
3. Open `LoginPage.js` and explain POM.
4. Open `testFixture.js` and explain custom fixtures.
5. Run the smoke suite.
6. Open the HTML report.
7. Demonstrate a failed test and show screenshot/trace.
8. Open GitHub Actions and show the CI run.

## Demo credentials

SauceDemo provides demo credentials. This project uses:

- Standard user: `standard_user`
- Password: `secret_sauce`
- Locked user: `locked_out_user`

These are public demo credentials for the sample application; do not use real credentials in a public repository.

## Suggested next enhancements

- API testing with Playwright request fixture
- Environment-specific config (DEV/UAT)
- Accessibility checks
- API/UI hybrid tests
- More robust data factories
- Allure reporting if specifically required by a target company
