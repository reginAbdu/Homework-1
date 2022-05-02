const BasePage = require('./basePage');

const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
    constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#login-email');
    this.passwordInput = page.locator('#login-pass');
    this.rememberMeCheck = page.locator('#login-rememberme')
    this.buttonSignInHeader = page.locator('//*[@class = "log_in bt-mr-3 bt-d-block color-dark"]')
    this.buttonSignIn = page.locator('//*[@id="sgn_in_popup"]/div[1]/div/div[1]/form/div[3]/div[2]/input')

}

async login (email, password) {
    await this.page.goto('https://www.collegerentals.com/')
    await this.buttonSignInHeader.click();
    await this.emailInput.fill(email);
    await this.passwordInput.fill( password);
    await this.rememberMeCheck.check()
    await this.buttonSignIn.click()
}
}


