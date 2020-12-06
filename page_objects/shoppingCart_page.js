let Input = require("../elements/input.element")
let BasePage = require("../base/base.page");
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let shoppingCartLocator = by.css('.navigation_page') //getText
let qtyInputLocator = by.css('.cart_quantity_input')
let proceedToCheckoutBtnLocator1 = by.css('.button.btn.btn-default.standard-checkout')
let proceedToCheckoutBtnLocator2 = by.css('button[name=processAddress]') 

class ShoppingCartPage extends BasePage {
    async menu(value) {
        await allure.createStep(`Proceeding the order`, async () => {
        await this.getQuantityInput().sendKeys(value);
        await this.getProceedToCheckoutBtnElement1().click();
        await this.getProceedToCheckoutBtnElement2().click();
        })()
    }
    async clearQuantityInput() {
        await this.getQuantityInput().clear();
    };
    async getTextShoppingCart() {
        return await this.getTitleShoppingCartPage().getText();
    };
    getProceedToCheckoutBtnElement1() {
        return  new Button(element(proceedToCheckoutBtnLocator1), 'Proceed to checkout');
    };
    getProceedToCheckoutBtnElement2() {
        return  new Button(element(proceedToCheckoutBtnLocator2), 'Proceed to checkout');
    };
    getQuantityInput() {
        return new Input(element(qtyInputLocator), 'Quantity Input');
    }
    getTitleShoppingCartPage() {
        return new TextView(element(shoppingCartLocator), 'Your shopping cart');
    };
}
module.exports = new ShoppingCartPage();