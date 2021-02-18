let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let pageHeadingPayLocator = by.css('.navigation_page') //getText "Your payment method"
let payByCheckBtnLocator = by.css('.cheque')

class PaymentPage extends BasePage {
    async paymentByCheck() {
        await allure.createStep(`Proceeding the order with payment`, async () => {
        await this.getPayByCheckBtn().click();
        })()
    }
    async getTextPaymentMethodPage() {
        return await this.getTitlePaymentMethodPage().getText();
    };
    getPayByCheckBtn() {
        return new Button(element(payByCheckBtnLocator), 'Pay by check');
    };
    getTitlePaymentMethodPage() {
        return new TextView(element(pageHeadingPayLocator), 'Your payment method');
    };
}
module.exports = new PaymentPage();