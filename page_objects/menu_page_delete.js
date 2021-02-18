let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")

let womenTabLocator = by.xpath('//a[.="Women"]')
let productLocator = by.xpath('(//a[.="Summer Dresses"])[1]')
let addtocartLocator = by.xpath('(//a[contains(@class, "ajax_add_to_cart")])[INDEX]')
//let addtocartLocator = by.css('(.product_list>li:nth-of-type(index))')
let continueBtnLocator = by.css('.continue span')


class MenuPage extends BasePage {
    async navigateToProduct() {
        await allure.createStep(`Navigate to Summer Dress`, async () => {
        await this.getWomenBtnElement().waitForVisible();
        await this.getWomenBtnElement().mouseMove();
        await this.getProductElement().click();
        })()
    }
    async clickToAddProducts() {
        await this.getAddProductElement(1).click();
        await this.getContinueShoppingElement().waitForVisible();
        await this.getContinueShoppingElement().click();
        await this.getAddProductElement(2).click();
        await this.getContinueShoppingElement().waitForVisible();
        await this.getContinueShoppingElement().click();
        await this.getAddProductElement(3).waitForVisible();
        await this.getAddProductElement(3).click();
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
    getAddProductElement(index) {
        let finalLocator =  Object.assign({}, addtocartLocator);
        console.log('test'+ JSON.stringify(finalLocator));
        finalLocator.value = finalLocator.value.replace("INDEX", index);
        console.log('test'+ JSON.stringify(finalLocator));
        console.log('test2'+ JSON.stringify(addtocartLocator));
        return  new Button(element(finalLocator), `Summer Dress #${index}`);

    };
    getContinueShoppingElement() {
        return  new Button(element(continueBtnLocator), 'Continue Shopping');
    };

}
module.exports = new MenuPage();
