let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let breadcrumbLocator = by.css('.breadcrumb')
let selectListLocator = by.css('.icon-th-list')
let productDescLocator = by.css('.product-desc')
let addToCartLocator = by.xpath('//*[.="Add to cart"]')
//let addedProductLocator = by.xpath('//i[@class="icon-ok"]/../../h2') //getText
let addedProductLocator = by.css('.icon-ok')
let proceedLocator = by.css('.button-medium:nth-child(2)')

class ProductPage extends BasePage {
    async getViewList() {
        await this.getViewListlement().click();
    }
    async AddToCart() {
        await allure.createStep(`Add product to the cart`, async () => {
        await this.getAddtoCartBtnElement().click();
        })()
    }
    async ProceedToCheckout() {
        return await this.getProceedToCheckoutBtnElement().click();
    }
    async getTextOfProductPage() {
        return await this.getProductTitle().getText();
    }
    async getTextOfViewList() {
        return await this.getDescViewList().waitForVisible(10000);
    }
    async getTextOfSuccessAddedProduct() {
        return await this.getTitleAddedProductToCart().waitForPresence(10000);
    }
    getViewListlement() {
        return  new Button(element(selectListLocator), 'View List');
    };
    getAddtoCartBtnElement() {
        return  new Button(element(addToCartLocator), 'Add to Cart');
    };
    getProceedToCheckoutBtnElement() {
        return  new Button(element(proceedLocator), 'Proceed to checkout');
    };
    getProductTitle() {
        return new TextView(element(breadcrumbLocator), 'Title Expect Product page');
    };
    getDescViewList() {
        return new TextView(element(productDescLocator), 'Description Expect View list');
    };
    getTitleAddedProductToCart() {
        return new TextView(element(addedProductLocator), 'Product successfully added to your shopping cart');
    };
}
module.exports = new ProductPage();