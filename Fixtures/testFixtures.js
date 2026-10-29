const { test: base, expect} = require('@playwright/test'); //test.base means test import kr k base name dia


const {LoginPage} = require('../pages/LoginPage');
const {productPage} = require('../pages/productPage');
const {CartPage} = require('../pages/CartPage');


//Create custom fixtures

const test = base.extend({ //base.extend custom fixtures create krta ha 

    loginPage: async({page}, use) =>{
        
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

     productPage: async({page}, use) =>{
        
        const ProductPage = new productPage(page);

        await use(ProductPage);
    },

     cartPage: async ({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);
    },
loggedInPage: async ({ page, loginPage }, use) => {

        await loginPage.open();

        await loginPage.login('standard_user', 'secret_sauce');

        await expect(page).toHaveURL(/inventory.html/);

        await use(page);
    }

})

module.exports = {test, expect};