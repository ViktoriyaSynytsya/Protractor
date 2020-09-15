let BasePage = require("../base/base.page")
let Dropdown = require("../elements/dropdown.element")
let Input = require("../elements/input.element")
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let submAccountLocator = by.css('#submitAccount')
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
let passwordLocator = by.css('#passwd');

class Registration extends BasePage {
    async registrationForm(firstName, lastName, password, firstNameAdd,
        lastNameAdd, address, city, state, zipcode, country, mobPhone, alias) {
        await allure.createStep(`Register in ${password}`, async () => {
            await this.getFirstNameInputForReg().sendKeys(firstName);
            await this.getLastNameInputForReg().sendKeys(lastName);
            await this.getPassInput().sendKeys(password);
            //await this.getFirstNameAddInputForReg().sendKeys(firstNameAdd);
            //await this.getLastNameAddInputForReg().sendKeys(lastNameAdd);
            await this.getAddressInputForReg().sendKeys(address);
            await this.getCityInputForReg().sendKeys(city);
            await this.getStateDropdownForReg().open();
            await this.getStateDropdownForReg().selectItem(state);
            await this.getPostCodeInputForReg().sendKeys(zipcode);
            await this.getCountryDropdownForReg().open();
            await this.getCountryDropdownForReg().selectItem(country);
            await this.getMobilePhoneInputForReg().sendKeys(mobPhone);
            await this.getAddAliasInputForReg().clear();
            await this.getAddAliasInputForReg().sendKeys(alias);
        })()
    }
        async getTextForRegForm() {
        return await this.getTitleforExpect().getText();
    }
        async getTextFromRegisterForm() {
        await this.getBaseElementForReg().click();
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
        getPassInput() {
            return new Input(element(passwordLocator), 'pass');
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
    }
    module.exports = new Registration();