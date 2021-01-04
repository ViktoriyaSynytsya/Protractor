let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let pageHeadingShippingLocator = by.css('.page-heading') //getText "Shipping"
let checkboxAgreeLocator = by.css('input[name=cgv]')
let proceedToCheckoutBtnLocator3 = by.css('button[name=processCarrier]')  

class ShippingPage extends BasePage {
    async proceedToCheckoutShipping() {
        await allure.createStep(`Proceeding the order with shipping`, async () => {
        await this.getCheckboxAgree().click();
        await this.getProceedToCheckoutBtnElement().click();
        })()
    }
   
    async getTextShippingPage() {
        return await this.getTitleShippingPage().getText();
    };
    getProceedToCheckoutBtnElement() {
        return  new Button(element(proceedToCheckoutBtnLocator3), 'Proceed to checkout');
    };
    getTitleShippingPage() {
        return new TextView(element(pageHeadingShippingLocator), 'Shipping page');
    };
    getCheckboxAgree() {
        return new Button(element(checkboxAgreeLocator), 'Get Checkbox Agree');
    };
}
module.exports = new ShippingPage();