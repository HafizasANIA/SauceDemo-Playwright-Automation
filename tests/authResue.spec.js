const {test, expect} = require('@playwright/test');

test.use({

    storageState: 'auth.json'
});

test('Verify Products without manual login', async({page})=>{

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.locator('.inventory_item')).toHaveCount(6);
})