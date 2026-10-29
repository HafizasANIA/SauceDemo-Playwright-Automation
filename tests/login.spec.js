//import test for automated test define and expect for actual result compare with expected result

const {test, expect} = require('@playwright/test');


//Importing class LoginPage 
const {LoginPage} = require('../pages/LoginPage'); // ../ means tests folder se one level up move krna 

test('TC01 Valid Login', async({page}) =>{

    //LoginPage class ka object bn rha ha 

    const loginPage = new LoginPage(page);

    //Open website call open function

    await loginPage.open();

    //call login function and enter username and password

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('TC02- Invalid Password', async({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login('standard_user', 'wrong123');

    await expect(page).toHaveURL('https://www.saucedemo.com');
});


test('TC03 - Empty Username' ,async({page}) =>{

    //create object 

    const loginPage = new LoginPage(page);

    //open website call open function 

    await loginPage.open();

    //enter username and password

    await loginPage.login('', 'secret_sauce');

    await expect(page).toHaveURL('https://www.saucedemo.com');
})

//Test case 4 Empty password

test('TC04 - Empty Password', async({page}) =>{

    //Create object 

    const loginPage = new LoginPage(page);

    //open Website 

    await loginPage.open();

    //Enter Username and empty password

    await loginPage.login('standard_user', '');

    //Clik login 

    await expect(page).toHaveURL('https://www.saucedemo.com');


    
})

test('TC05 - Locked Out User', async({page}) =>{


    //create object 

    const loginPage = new LoginPage(page);

    //Open website 
    await loginPage.open();

    //Enter locked out and password
    await loginPage.login('locked_out_user','secret_sauce');

    //Click login and display error message


    await expect(page).toHaveURL('https://www.saucedemo.com');
})