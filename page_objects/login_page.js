// const { element } = require("protractor");
const random = require("../node_modules/random-js").Random;

let Input = require("../elements/input.element")
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let BasePage = require("../base/base.page")

let emailLocator = by.css('#email');
let passwordLocator = by.css('#passwd');
let submitbtnLocator = by.css('#SubmitLogin');
let textloginLocator = by.css('#login_form>.page-subheading');
let errorpassword = by.css('.alert li')
let emailforRegLocator = by.css('#email_create')
//let textPersonalInfLocator = by.xPath('//*[.=`Your personal information`]')

class LoginPage extends BasePage {
    async login(email, password) {
        await allure.createStep(`Logging in ${email} / ${password}`, async () => {
            await this.getEmailInput().sendKeys(email);
            await this.getPassInput().sendKeys(password);
            await this.getSubmButInput().click();
        })()
    }


    getRandomEmail() {
        return this.getRandomString(12);
    }

    getRandomString(characterLength) {
        let randomText = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < characterLength; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText + '@gmail.com';
    }


    async getErrorMessage() {
        return await this.getErrorElement().getText();
    }
    async clearCredentials() {
        await this.getEmailInput().clear();
        await this.getPassInput().clear();
    }

    async sendEmail(email) {
        await allure.createStep(`Sign in ${email}`, async () => {
            await this.getEmailInputForReg().sendKeys(email);
        })()
    }

    async getTextFromRegisterForm() {
        return await this.getBaseElementForReg().getText();
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
        return new TextView(element(textloginLocator), 'Login page base element');
    }
    getErrorElement() {
        return new TextView(element(errorpassword), 'Error about unsuccessful login');
    }
    getEmailInputForReg() {
        return new Input(element(emailforRegLocator), 'email');
    }
    getBaseElementForReg() {
        return new TextView(element(textPersonalInfLocator), 'Your personal information');
    }

}

module.exports = new LoginPage();