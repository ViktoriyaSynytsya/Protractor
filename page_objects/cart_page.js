let BasePage = require("../base/base.page");
let Button = require("../elements/button.element");
const TextView = require("../elements/text.view");

let cartLocator = by.css('.shopping_cart')
let checkoutBtnLocator = by.css('#button_order_cart')
let qtyItemsInCartLocator1 = by.xpath('(//div/a/span)[1]')
let removeFirstLocator = by.xpath('(//span/a)[1]')
let shoppingCartSummaryLocator = by.xpath('//h1[contains(text(),"Shopping-cart summary")]')
let removeLastLocator = by.xpath('(//span/a)[2]')




class CartPage extends BasePage {
    async hoverCart() {
        await allure.createStep(`Hover over the cart`, async () => {
        await this.getShoppingCartElement().mouseMove();
        })()
    }

    async expRezCheckoutBtn1() {
        //await this.getCheckoutBtnElement().waitForVisible();
        return await this.getCheckoutBtnElement().isDisplayed();
    }

    async expRezQtyItem1() {
        //await this.getCheckoutBtnElement().waitForVisible();
        return await this.getQtyItem1Element().getText();
    }
    async removeFirstItem() {
        await allure.createStep(`Remove first item from the cart`, async () => {
        await this.getRemove1Element().click();
        })()
    }
    async expRezCheckoutBtn2() {
        //await this.getCheckoutBtnElement().waitForVisible();
        return await this.getCheckoutBtnElement().isDisplayed();
    }
    async clickCart() {
        await allure.createStep(`Click the cart`, async () => {
        await this.getShoppingCartElement().click();
        })()
    }
    async getTextShopCarSummary() {
        //await this.getCheckoutBtnElement().waitForVisible();
        return await this.getShopCartSummaryElement().getText();
    }
    async expRezQtyItem3() {
        //await this.getCheckoutBtnElement().waitForVisible();
        return await this.getQtyItem1Element().getText();
    }
    async removeLastItem() {
        await allure.createStep(`Remove last item from the cart`, async () => {
        await this.getRemove2Element().click();
        })()
    }

getShoppingCartElement() {
    return new Button(element(cartLocator), 'Cart');
};
getCheckoutBtnElement() {
    return new Button(element(checkoutBtnLocator), 'Checkout button in cart pop up');
};
getQtyItem1Element() {
    return new TextView(element(qtyItemsInCartLocator1), 'Quantity of items in cart pop up 1');
};
getRemove1Element() {
    return new Button(element(removeFirstLocator), 'Remove btn 1');
};
getShopCartSummaryElement() {
    return new TextView(element(shoppingCartSummaryLocator), 'Shopping Cart Summary text');
};
getRemove2Element() {
    return new Button(element(removeLastLocator), 'Remove btn 2');
};

}
module.exports = new CartPage();