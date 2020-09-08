// const { element } = require("protractor");
const random = require("../node_modules/random-js").Random;

let Input = require("../elements/input.element")
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")
let Dropdown = require("../elements/dropdown.element")

let BasePage = require("../base/base.page")

let emailLocator = by.css('#email');
let passwordLocator = by.css('#passwd');
let submitbtnLocator = by.css('#SubmitLogin');
let textloginLocator = by.css('#login_form>.page-subheading');
let errorpassword = by.css('.alert li')
let emailforRegLocator = by.css('#email_create')
let createAnAccountLocator = by.css('#SubmitCreate')
let submAccountLocator = by.css('#submitAccount')
//let textPersonalInfLocator = by.xPath("//*[.='Your personal information']")
let firstNameTitleLocator = by.css('#customer_firstname')
let lastNameTitleLocator = by.css('#customer_lastname')
let firstNameAddLocator = by.css('[name=firstname]')
let lastNameAddLocator = by.css('[name=lastname]')
let addressLocator = by.css('[name=address1]')
let cityLocator = by.css('[name=city]')
let stateLocator = by.css('#id_state')
let postcodeLocator = by.css('#postcode')
let countryLocator = by.css('#id_country')
let mobileLocator = by.css('#phone_mobile')
let addressAliasLocator = by.css('#alias')


let regForm = by.xpath('//label[.="Title"]')
let successfulReg = by.css('.info-account')

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

    async createAnAccout() {
        await this.getSubmButForRegInput().click();
    }

    async getTextFromRegisterForm() {
        await this.getBaseElementForReg().click();
    }
    async getTextForRegForm() {
        return await this.getTitleforExpect().getText();
    }
    async getTextForSuccessReg() {
        return await this.getTextforExpect().getText();
    }
    

    async registrationForm(firstName, lastName, password, firstNameAdd,
        lastNameAdd, address, city, zipcode, mobPhone, alias) {
        await allure.createStep(`Register in ${password}`, async () => {
            await this.getFirstNameInputForReg().sendKeys(firstName);
            await this.getLastNameInputForReg().sendKeys(lastName);
            await this.getPassInput().sendKeys(password);
            //await this.getFirstNameAddInputForReg().sendKeys(firstNameAdd);
            //await this.getLastNameAddInputForReg().sendKeys(lastNameAdd);
            await this.getAddressInputForReg().sendKeys(address);
            await this.getCityInputForReg().sendKeys(city);
            await this.getStateDropdownForReg().open();
            await this.getStateDropdownForReg().selectItem('Hawaii');
            await browser.sleep(3000);
            await this.getPostCodeInputForReg().sendKeys(zipcode);
            await this.getCountryDropdownForReg().open();
            await this.getCountryDropdownForReg().selectItem('United States');
            await this.getMobilePhoneInputForReg().sendKeys(mobPhone);
            await this.getAddAliasInputForReg().clear();
            await this.getAddAliasInputForReg().sendKeys(alias);
        })()
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
    getSubmButForRegInput() {
        return new Button(element(createAnAccountLocator), 'Submit');
    }
    getBaseElementForReg() {
        return new Button(element(submAccountLocator), 'Register button');
    }
    getFirstNameInputForReg() {
        return new Input(element(firstNameTitleLocator), 'First Name on Title');
    }
    getLastNameInputForReg() {
        return new Input(element(lastNameTitleLocator), 'Last Name on Title');
    }
    getFirstNameAddInputForReg() {
        return new Input(element(firstNameAddLocator), 'First Name on Address');
    }
    getLastNameAddInputForReg() {
        return new Input(element(lastNameAddLocator), 'Last Name on Address');
    }
    getAddressInputForReg() {
        return new Input(element(addressLocator), 'Address');
    }
    getCityInputForReg() {
        return new Input(element(cityLocator), 'City');
    }
    getStateDropdownForReg() {
        return new Dropdown(element(stateLocator), 'State');
    }
    getPostCodeInputForReg() {
        return new Input(element(postcodeLocator), 'PostCode');
    }
    getCountryDropdownForReg() {
        return new Dropdown(element(countryLocator), 'Country');
    }
    getMobilePhoneInputForReg() {
        return new Input(element(mobileLocator), 'Mobile Phone');
    }
    getAddAliasInputForReg() {
        return new Input(element(addressAliasLocator), 'Address Alias');
    }
    getTitleforExpect() {
        return new TextView(element(regForm), 'Title Except Reg Form');
    }
    getTextforExpect() {
        return new TextView(element(successfulReg), 'Text Except Successful Reg');
    }
}

module.exports = new LoginPage();