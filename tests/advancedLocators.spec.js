const { test, expect } = require('../fixtures/testFixtures');

test('TC01 - Add Backpack using advanced Locators', async({loggedInPage}) =>{

    //Find the product card by product name

    const backpack = loggedInPage.locator('.inventory_item').filter({hasText: 'Sauce Labs Backpack'});

    //Find Add to cart button inside that product

    const addButton = backpack.getByRole('button', {name: 'Add to cart'});

    //Click the button

    await addButton.click();

    //Verify cart badge

    await expect(loggedInPage.locator('.shopping_cart_badge')).toHaveText('1');
})


test('TC02 - Verify Products Using nth first last', async({loggedInPage}) =>{

    //Locate all products
    const products = loggedInPage.locator('.inventory_item');

    //Verify total products

    await expect(products).toHaveCount(6);

    //First product
    const firstProduct = products.first();

    await expect(firstProduct).toBeVisible();


    // Third product  <-- YE ADD KARO
const thirdProduct = products.nth(2);
await expect(thirdProduct).toBeVisible();

    // Last product
        const lastProduct = products.last();

        await expect(lastProduct).toBeVisible();

        // Print product names
        console.log(
            'First:',
            await firstProduct.locator('.inventory_item_name').innerText()
        );

        console.log(
            'Third:',
            await thirdProduct.locator('.inventory_item_name').innerText()
        );

        console.log(
            'Last:',
            await lastProduct.locator('.inventory_item_name').innerText()
        );

    
})

test('TC05 - Debug incorrect cart badge', async ({ loggedInPage }) => {

    const backpack = loggedInPage.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    await backpack.getByRole('button', { name: 'Add to cart' }).click();

    // Intentionally incorrect expected value
    await expect(
        loggedInPage.locator('.shopping_cart_badge')
    ).toHaveText('1');

});