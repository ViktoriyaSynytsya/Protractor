// const { element } = require("protractor");
let Input = require("../elements/input.element")
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let BasePage = require ("../base/base.page")



let emailLocator = by.css('#email');
let passwordLocator = by.css('#passwd');
let submitbtnLocator = by.css('#SubmitLogin');
let textloginLocator = by.css('#login_form>.page-subheading');


class LoginPage extends BasePage {

   
    
    async login (email,password) {
        await allure.createStep(`Logging in ${email} / ${password}`, async () => {
            await this.getEmailInput().sendKeys(email);
            await this.getPassInput().sendKeys(password);
            await this.getSubmButInput().click();

        })();
     
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
    
}

module.exports = new LoginPage();