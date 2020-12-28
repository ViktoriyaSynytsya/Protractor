let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let pageHeadingCheckLocator = by.css('.navigation_page') //getText "Check payment"
let confirmOrderLocator = by.xpath('//*[.="I confirm my order"]') 

let pageHeadingOrderConfirmLocator = by.css('.navigation_page') //getText "Order confirmation"

class ConfirmationOrderPage extends BasePage {
    async confirmOrder() {
        await allure.createStep(`Confirm the order`, async () => {
        await this.getConfirmOrderBtn().click();
        })()
    }
    async getTextCheckPayment() {
        return await this.getTitleCheckPaymentPage().getText();
    };
    async getTextConfirmOrder() {
        return await this.getTitleConfirmOrderPage().getText();
    };
    getConfirmOrderBtn() {
        return new Button(element(confirmOrderLocator), 'Pay by check');
    };
    getTitleCheckPaymentPage() {
        return new TextView(element(pageHeadingCheckLocator), 'Check payment');
    };
    getTitleConfirmOrderPage() {
        return new TextView(element(pageHeadingOrderConfirmLocator), 'Order confirmation');
    };

}
module.exports = new ConfirmationOrderPage();