const { test, expect } = require('../fixtures/testFixture');
const checkoutData = require('../test-data/checkout.json');

test.describe('Cart and checkout functionality', () => {
  test('@smoke user can complete checkout', async ({ page, inventoryPage, cartPage, checkoutPage, loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/inventory\.html/);

    await inventoryPage.addProduct('Sauce Labs Backpack');
    await inventoryPage.openCart();

    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await cartPage.checkout();

    const customer = checkoutData.validCustomer;
    await checkoutPage.enterCustomerDetails(customer.firstName, customer.lastName, customer.postalCode);
    await checkoutPage.continueToOverview();
    await expect(page.getByRole('button', { name: 'Finish' })).toBeVisible();

    await checkoutPage.finishOrder();
    await expect(checkoutPage.completeHeader).toBeVisible();
  });

  test('@regression user can remove an item from cart', async ({ page, inventoryPage, cartPage, loggedInPage }) => {
    await expect(loggedInPage).toHaveURL(/inventory\.html/);
    await inventoryPage.addProduct('Sauce Labs Backpack');
    await inventoryPage.openCart();
    await cartPage.removeProduct('Sauce Labs Backpack');
    await expect(page.getByText('Sauce Labs Backpack')).not.toBeVisible();
  });
});
