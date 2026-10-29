class CheckoutPage{

    constructor(page) {

        this.page = page;

        this.checkoutButton = page.locator('[data-test="checkout"]');

        //Customer information fields

        this.firstName = page.locator('[data-test="firstName"]');

        this.lastName = page.locator('[data-test="lastName"]');

        this.postalCode = page.locator('[data-test="postalCode"]');

        this.continueButton = page.locator('[data-test="continue"]');

        this.finishButton = page.locator('[data-test="finish"]');

        this.orderConfirmation = page.locator('[data-test="complete-header"]');

        this.errorMessage = page.locator('[data-test="error"]');
        }
        //Click checkout

        async startcheckoutButton() {

            await this.checkoutButton.click();
        }

        //Fill customer information 

        async fillcustomerInformation(first, last, postal) {

            await this.firstName.fill(first);

            await this.lastName.fill(last);

            await this.postalCode.fill(postal);
        }

        //Continue to overview page

        async continueCheckout(){

            await this.continueButton.click();
        }

        //Order Confirmation page 

        async finishOrder(){

            await this.finishButton.click();
        }

    
}

module.exports = { CheckoutPage };