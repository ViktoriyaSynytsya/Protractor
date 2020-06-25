// const { element } = require("protractor");
let BasePage = require ("../base/base.page")

let emailLocator = by.css('#email')
let passwordLocator = by.css('#passwd')
let submitbtnLocator = by.css('#SubmitLogin')

class LoginPage extends BasePage {
    
    async login (email,password) {
        await this.getEmailInput().sendKeys(email);
        await this.getPassInput().sendKeys(password);
        await this.getSubmButInput().click();
    } 
    getEmailInput() {
        return element(emailLocator);
    }

    getPassInput() {
        return element(passwordLocator);
    }

    getSubmButInput() {
        return element(submitbtnLocator);
    }
}

module.exports = new LoginPage();