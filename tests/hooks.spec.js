const {test, expect} = require('@playwright/test');

const {LoginPage} = require('../pages/LoginPage');
const {productPage} = require('../pages/productPage');


//Run Before every test

test.beforeEach(async({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);

})

//Test 1 
test('Verify Product Page', async({page}) =>{

    await expect(page).toHaveURL(/inventory.html/);

});

//Test 2

test('Add Bacakapck to cart', async({page}) =>{

    const ProductPage = new productPage(page);

    await ProductPage.addBackpackToCart();

    await expect(ProductPage.cartBadge).toHaveText('1');
})

//Before Each 

test.afterEach(async ({page}, testInfo)=>{ //testInfo means current test name 

    console.log('Test name', testInfo.title);

    console.log('Test Status', testInfo.status); // status measn passed or failed 

    await page.screenshot({ ///page.screenshot means take browser page screenshot 

        path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '-')}.png`,
        fullPage: true
    });
});

//Before All function

test.beforeAll(async() =>{

    console.log('Starting SauceDemo Test Suite');
});


//After All Function 

test.afterAll(async () =>{

    console.log('SauceDemo Test Suite completed')
});