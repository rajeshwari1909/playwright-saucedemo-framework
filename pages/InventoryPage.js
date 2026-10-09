class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.sortDropdown = page.getByRole('combobox', { name: 'Sort' });
    this.cartLink = page.getByRole('link', { name: /cart/i });
    this.menuButton = page.getByRole('button', { name: /open menu/i });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
  }

  async sortBy(value) {
    await this.sortDropdown.selectOption(value);
  }

  async addProduct(productName) {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.getByRole('button', { name: /add to cart/i }).click();
  }

  async removeProduct(productName) {
    const item = this.inventoryItems.filter({ hasText: productName });
    await item.getByRole('button', { name: /remove/i }).click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}

module.exports = { InventoryPage };
