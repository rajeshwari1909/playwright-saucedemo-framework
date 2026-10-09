const { test, expect } = require('../fixtures/testFixture');

test.describe('Inventory functionality', () => {
  test.beforeEach(async ({ loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/inventory\.html/);
  });

  test('@smoke user can add a product to cart', async ({ page, inventoryPage }) => {
    await inventoryPage.addProduct('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('@regression user can sort products by price low to high', async ({ page, inventoryPage }) => {
    await inventoryPage.sortBy('lohi');
    const prices = await page.locator('[data-test="inventory-item"] [data-test="inventory-item-price"]').allTextContents();
    const numericPrices = prices.map(price => Number(price.replace('$', '')));
    expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
  });

  test('@regression user can logout', async ({ page, inventoryPage }) => {
    await inventoryPage.logout();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});
