

const { test, expect } = require('../Fixtures/testFixtures');
test('TC01- Login using Fixtures', async({page, loginPage}) =>{

    await loginPage.open();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);


});

test('TC02 - Add Backpack using Custom Fixtures', async ({ page, loginPage, productPage }) => {

    await loginPage.open();

    await loginPage.login('standard_user', 'secret_sauce');

    await productPage.addBackpackToCart();

    await expect(productPage.cartBadge).toHaveText('1');

});
