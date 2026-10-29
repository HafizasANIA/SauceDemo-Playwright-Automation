const {test,expect} = require('@playwright/test');

//Import Login page object and Product page

const {LoginPage} = require('../pages/LoginPage');
const {productPage} = require('../pages/productPage');
const {CartPage} = require('../pages/CartPage');
const {CheckoutPage} = require('../pages/CheckoutPage');

test('TC06 -- Add backPack to cart', async({page}) =>{



//cREATE OBJECT FOR LOGIN AND Product page


const loginPage = new LoginPage(page);
const ProductPage = new productPage(page);

//Open 1st Login page 

await loginPage.open();

//Enter username and password

await loginPage.login('standard_user','secret_sauce');

//After login open Product page 

await expect(page).toHaveURL(/inventory.html/);

await ProductPage.addBackpackToCart();

await expect(ProductPage.cartBadge).toHaveText('1');



})


test('TC07 - Remove Backpack from Cart', async({page})=>{

    //create objects 

    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);

    //Open login
    await loginPage.open();

    //enter username and password
    await loginPage.login('standard_user', 'secret_sauce');

    //Go to Product page 

    await expect(page).toHaveURL(/inventory.html/);

    await ProductPage.addBackpackToCart();

    await expect(ProductPage.cartBadge).toHaveText('1');

    await ProductPage.removeBackpackFromCart();

    await expect(ProductPage.cartBadge).toBeHidden();
})

//Test Case number 8 Multiple Products

test('TC08 - Add Multiplae Products', async({page})=>{


    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);

    //Open website 

    await loginPage.open();

    //Enter username and password

    await loginPage.login('standard_user','secret_sauce');

    //Clik login

    await expect(page).toHaveURL(/inventory.html/);

    //Add 1st product to cart

    await ProductPage.addBackpackToCart();

    //verify 1 product in cart

    await expect(ProductPage.cartBadge).toHaveText('1');

    //Add 2nd product

    await ProductPage.addBikeLightToCart();

    //Verify 2 products in a cart 

    await expect(ProductPage.cartBadge).toHaveText('2');



})

//Test Case 9 

test('TC09 - Verify Products in a Shopping Cart', async({page})=>{

    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);
    const cartPage = new CartPage(page);


    await loginPage.open();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);


    await ProductPage.addBackpackToCart();

    await ProductPage.addBikeLightToCart();

    await cartPage.openCart();

    await expect(page).toHaveURL(/cart.html/);

    await expect(cartPage.backpack).toBeVisible();

    await expect(cartPage.bikeLight).toBeVisible();

    await cartPage.removeBackpack();

    await expect(cartPage.backpack).toHaveCount(0);

    await expect(ProductPage.cartBadge).toHaveText('1');


})



test('TC11 - Checkout with valid Customer Information', async({page})=>{


    //Create page objects

    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    //Step 1 Open website

    await loginPage.open();

    //Step 2 Enter username and password 

    await loginPage.login('standard_user','secret_sauce');

    //Step 3 Verify product page after login

    await expect(page).toHaveURL(/inventory.html/);

    //Step 4 Add Product BackPack to cart 

    await ProductPage.addBackpackToCart();

    //Step 5 Open Shopping cart

    await cartPage.openCart();

    //Step 6 clik chekcout 

    await checkoutPage.startcheckoutButton();


    //Step 7 Verify customer information page

    await expect(page).toHaveURL(/checkout-step-one.html/);

    //Step 8 Enter customer information 

    await checkoutPage.fillcustomerInformation(
        'Sania',
        'Farooq',
        'E177JH'
    );


    // Step 9 Clik Continue 

    await checkoutPage.continueCheckout();

    //Step 10 Verify Customer overview page

    await expect(page).toHaveURL(/checkout-step-two.html/);



})


test('TC12 - Complete Order Successfully', async({page})=>{


    //Create page objects

    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    //Step 1 Open website

    await loginPage.open();

    //Step 2 Enter username and password 

    await loginPage.login('standard_user','secret_sauce');

    //Step 3 Verify product page after login

    await expect(page).toHaveURL(/inventory.html/);

    //Step 4 Add Product BackPack to cart 

    await ProductPage.addBackpackToCart();

    //Step 5 Open Shopping cart

    await cartPage.openCart();

    //Step 6 clik chekcout 

    await checkoutPage.startcheckoutButton();


    //Step 7 Verify customer information page

    await expect(page).toHaveURL(/checkout-step-one.html/);

    //Step 8 Enter customer information 

    await checkoutPage.fillcustomerInformation(
        'Sania',
        'Farooq',
        'E177JH'
    );


    // Step 9 Clik Continue 

    await checkoutPage.continueCheckout();

    //Step 10 Verify Customer overview page

    await expect(page).toHaveURL(/checkout-step-two.html/);

    //Finish Order 

    await checkoutPage.finishOrder();

    //Verify Confirmation Page 

    await expect(page).toHaveURL(/checkout-complete.html/);

    //Verify Confirmation Message

    await expect(checkoutPage.orderConfirmation).toHaveText('Thank you for your order!');




})



test('TC13 - Checkout with Empty First Name', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Login
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add product
    await ProductPage.addBackpackToCart();

    // Open shopping cart
    await cartPage.openCart();

    // Start checkout
    await checkoutPage.startcheckoutButton();

    // Fill invalid customer information
    await checkoutPage.fillcustomerInformation(
        '',
        'User',
        'E17 1AA'
    );

    // Click Continue
    await checkoutPage.continueCheckout();

    // Verify validation error
    await expect(checkoutPage.errorMessage).toHaveText('Error: First Name is required');

    // Verify user stays on checkout form
    await expect(page).toHaveURL(/checkout-step-one.html/);

});


test('TC14 - Sort Products Price Low to High', async({page}) =>{

    const loginPage = new LoginPage(page);
    const ProductPage = new productPage(page);

    //Login

    await loginPage.open();

    await loginPage.login('standard_user','secret_sauce');

    //Verify Product Page

    await expect(page).toHaveURL(/inventory.html/);

    //sort Products
    await ProductPage.sortPriceLowToHigh();

    //get all Products Price

    const priceTexts = await ProductPage.allTextContains();

    //Convert prices into numbers

    const prices = priceTexts.map(price => Number(price.replace('$','')));

    //Create expected sorted array 

    const sortedprice = [...prices].sort((a,b)=> a-b);

    //Verify Sorting
    expect(prices).toEqual(sortedprice);
})
