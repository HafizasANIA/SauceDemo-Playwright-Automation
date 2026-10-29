class LoginPage{

    constructor(page) {

        this.page = page;

        //Locators
        this.usernameInput= page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage= page.locator('[data-test="error"]');


    }

    //Open Login page 
    async open()
    {
        await this.page.goto('/');


    }

    //Enter Username
    async enterUsername(username)
    {
        await this.usernameInput.fill(username);
    }

    //Enter Password
    async enterPassword(password)
    {
        await this.passwordInput.fill(password);
    }

    //Clik Login Button
    async clickLogin()
    {
        await this.loginButton.click();
    }

    //Reusable Login Function

    async login(username, password)
    {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

}

module.exports= {LoginPage};