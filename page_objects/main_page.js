let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")

let mainLogoLocator = by.css('.logo.img-responsive')
let qtyItemLocator = by.xpath('(//div/a/span)[1]')


class MainPage extends BasePage {
    async navigateToMainPage() {
        await allure.createStep(`Navigate to Main Page`, async () => {
        await this.getLogoElement().click();
        })()
    }

    async expRezQtyItem() {
        //await this.getCheckoutBtnElement().waitForVisible();
        return await this.getQtyItemElement().getText();
    }

    getLogoElement() {
        return  new Button(element(mainLogoLocator), 'Main Logo');
    }
    getQtyItemElement() {
        return  new Button(element(qtyItemLocator), 'Quantity items');
    }
}
module.exports = new MainPage();
