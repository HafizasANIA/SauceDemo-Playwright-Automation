const {test, expect} = require('@playwright/test');

const {LoginPage} = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json');

//Run a separate test for each JSON data entry

for(const data of loginData) { //this loop run JSON array for every object

    test(`Login Test - ${data.testCase}`, async({page}) =>{


        const loginPage = new LoginPage(page);

        await loginPage.open();

        await loginPage.login(data.username, data.password);

        if(data.expectedResult === 'success') {

            await expect(page).toHaveURL(/inventory.html/);


        }

        else {

            await expect(loginPage.errorMessage).toBeVisible();
        }


    });
}