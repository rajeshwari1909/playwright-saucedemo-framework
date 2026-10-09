const { test, expect } = require('../fixtures/testFixture');
const users = require('../test-data/users.json');

test.describe('Login functionality', () => {
  test('@smoke valid user can login', async ({ loginPage, page }) => {
    await loginPage.loginAs(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });

  test('@regression locked user cannot login', async ({ loginPage }) => {
    await loginPage.loginAs(users.locked.username, users.locked.password);
    await expect(loginPage.errorMessage).toContainText('locked out');
  });

  test('@regression invalid user sees login error', async ({ loginPage }) => {
    await loginPage.loginAs('invalid_user', 'invalid_password');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
