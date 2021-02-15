let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")

let womenTabLocator = by.xpath('//a[.="Women"]')
let productLocator = by.xpath('(//a[.="Summer Dresses"])[1]')
let addtocart1Locator = by.xpath('(//span[contains(text(),"Add to cart")])[1]')
let continueBtnLocator = by.css('.continue span')
let addtocart2Locator = by.xpath('(//span[contains(text(),"Add to cart")])[2]')
let addtocart3Locator = by.xpath('(//span[contains(text(),"Add to cart")])[3]')

class MenuPage extends BasePage {
    async navigateToProduct() {
        await allure.createStep(`Navigate to Summer Dress`, async () => {
        await this.getWomenBtnElement().waitForVisible();
        await this.getWomenBtnElement().mouseMove();
        await this.getProductElement().click();
        })()
    }
    async clickToAddProducts() {
        await this.getAddProduct1Element().click();
        await this.getContinueShoppingElement().waitForVisible();
        await this.getContinueShoppingElement().click();
        await this.getAddProduct2Element().click();
        await this.getContinueShoppingElement().waitForVisible();
        await this.getContinueShoppingElement().click();
        await this.getAddProduct3Element().waitForVisible();
        await this.getAddProduct3Element().click();
        await this.getContinueShoppingElement().waitForVisible();
        await this.getContinueShoppingElement().click();
        await this.getContinueShoppingElement().waitForInVisible();
    };

    getWomenBtnElement() {
        return  new Button(element(womenTabLocator), 'Women Tab');
    };
    getProductElement() {
        return  new Button(element(productLocator), 'Summer Dress Tab');
    };
    getAddProduct1Element() {
        return  new Button(element(addtocart1Locator), 'Summer Dress1');
    };
    getAddProduct2Element() {
        return  new Button(element(addtocart2Locator), 'Summer Dress2');
    };
    getAddProduct3Element() {
        return  new Button(element(addtocart3Locator), 'Summer Dress3');
    };
    getContinueShoppingElement() {
        return  new Button(element(continueBtnLocator), 'Continue Shopping');
    };

}
module.exports = new MenuPage();
