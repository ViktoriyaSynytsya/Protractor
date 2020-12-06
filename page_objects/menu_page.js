let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")

let womenTabLocator = by.xpath('//a[.="Women"]')
let tshirtChildLocator = by.xpath('(//a[.="T-shirts"])[1]')

class MenuPage extends BasePage {
    async menu() {
        await allure.createStep(`Navigate to T-shirts`, async () => {
        await this.getWomenBtnElement().mouseMove();
        await this.getTshirtBtnElement().click();
        })()
    }
    getWomenBtnElement() {
        return  new Button(element(womenTabLocator), 'Women Tab');
    };
    getTshirtBtnElement() {
        return  new Button(element(tshirtChildLocator), 'T-shirt Tab');
    };
}
module.exports = new MenuPage();







