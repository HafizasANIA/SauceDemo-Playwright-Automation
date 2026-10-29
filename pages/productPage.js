class productPage{

    constructor(page){

        this.page = page;


        //Locators
        this.addBackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

        this.addBikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');

        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');

        this.removeBackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');

        this.sortDropDown = page.locator('[data-test="product-sort-container"]');

        this.productprice = page.locator('[data-test="inventory-item-price"]');
    }

    async addBackpackToCart(){

        await this.addBackButton.click();
    }

    async addBikeLightToCart(){

        await this.addBikeLightButton.click();
    }

    //Remove product from Cart
    async removeBackpackFromCart(){
        await this.removeBackButton.click();
    }

    //Sort price low to High
    async sortPriceLowToHigh() {

        await this.sortDropDown.selectOption('lohi');  // this means low to high
    }
}

// Export class
module.exports = { productPage };