exports.loginPage = class loginPage {
    constructor(page) {
        this.page = page;
        this.usernameTextBoxElement = page.getByPlaceholder('Username');
        this.passwordTextBoxElement = page.getByPlaceholder('Password');
        this.loginButtonElement = page.locator('#login-button');
        this.sideMenuElement = page.locator('#react-burger-menu-btn');
        this.logoutButtonElement = page.locator('text=Logout');
        this.loginErrorMessageElement = page.locator('.error-message-container');
    }

    async navigateToSauceDemoHomePage()
    {
         await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUserName(username)
    {
        await this.usernameTextBoxElement.fill(username);
    }

    async enterPassword(password)
    {
        await this.passwordTextBoxElement.fill(password);
    }

    async login()
    {
         await this.loginButtonElement.click();
    }

    async isSideBarVisible()
    {
        return await this.sideMenuElement.isVisible();
    }

    async isErrorMessageVisible()
    {
        return await this.loginErrorMessageElement.isVisible();
    }

    async openSideMenu()
    {
        await this.sideMenuElement.waitFor({state:'visible'})
        await this.sideMenuElement.click();
    }

    async logout()
    {
        await this.logoutButtonElement.click();
    }

    async isLoginButtonVisible()
    {
        return await this.loginButtonElement.isVisible();
    }
}