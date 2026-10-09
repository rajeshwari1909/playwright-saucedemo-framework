function getRandomEmail() {
  return `testuser_${Date.now()}@example.com`;
}

async function waitForPageReady(page) {
  await page.waitForLoadState('domcontentloaded');
}

module.exports = { getRandomEmail, waitForPageReady };
