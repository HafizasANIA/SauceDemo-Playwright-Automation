class CartPage{

    constructor(page) {


        this.page = page;

        //Shopping Cart Icon
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');

        //Product name in cart 

        this.backpack = page.getByText('Sauce Labs Backpack', {exact: true});

        this.bikeLight = page.getByText('Sauce Labs Bike Light',{exact: true});

        this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    }

        async openCart(){

            await this.cartIcon.click();
        }


        async removeBackpack() {

            await this.removeBackpackButton.click();
        }
    }
module.exports = { CartPage };