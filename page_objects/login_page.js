// const { element } = require("protractor");
let Input = require("../elements/input.element")
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let BasePage = require ("../base/base.page")

let emailLocator = by.css('#email');
let passwordLocator = by.css('#passwd');
let submitbtnLocator = by.css('#SubmitLogin');
let textloginLocator = by.css('#login_form>.page-subheading');
let errorpassword = by.css('.alert li')

class LoginPage extends BasePage {   
    async login (email,password) {
        await allure.createStep(`Logging in ${email} / ${password}`, async () => {
            await this.getEmailInput().sendKeys(email);
            await this.getPassInput().sendKeys(password);
            await this.getSubmButInput().click();
        })()
    }
    async getErrorMessage () {
        return await this.getErrorElement().getText(); 
    }   
    async clearCredentials () {
         await this.getEmailInput().clear();
         await this.getPassInput().clear();
    }
    getEmailInput() {
        return new Input(element(emailLocator), 'email');
    }
    getPassInput() {
        return new Input(element(passwordLocator), 'pass');
    }
    getSubmButInput() {
        return new Button(element(submitbtnLocator), 'Submit');
    }
    getBaseElement() {
        return  new TextView(element(textloginLocator), 'Login page base element');
    }
    getErrorElement() {
        return  new TextView(element(errorpassword), 'Error about unsuccessful login');
    }
}

module.exports = new LoginPage();