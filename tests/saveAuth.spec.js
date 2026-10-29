const {test, expect} = require('@playwright/test');

const {LoginPage} = require('../pages/LoginPage');

test('Save Login Session', async({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

    //Save authenticated browser state

    await page.context().storageState({ //page.context() access current browser context , //storageState() cookies and local storage save 

        path: 'auth.json' // store satate in JSON
    });
})