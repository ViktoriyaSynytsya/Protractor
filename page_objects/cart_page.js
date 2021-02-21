let BasePage = require("../base/base.page");
let Button = require("../elements/button.element");
let TextView = require("../elements/text.view");

let cartLocator = by.css('.shopping_cart>a')
let checkoutBtnLocator = by.css('#button_order_cart') 
let totalLocator = by.xpath('//span[contains(text(),"Total")]')
let qtyItemsInCartLocator1 = by.xpath('(//div/a/span)[1]')
let removeFirstLocator = by.xpath('(//span/a)[1]')
let shoppingCartSummaryLocator = by.css('.navigation_page')
let removeLastLocator = by.xpath('(//span/a)[1]')

class CartPage extends BasePage {
    async hoverCart() {
        await allure.createStep(`Hover over the cart`, async () => {
        await this.getShoppingCartElement().waitForVisible();
        await this.getShoppingCartElement().mouseMove();
        })()
    }
    async expRezCheckoutBtn1() {
        await this.getCheckoutBtnElement().waitForVisible();
        return await this.getCheckoutBtnElement().isDisplayed();
    }
    async expTotal() {
        await this.getTotalElement().waitForPresence();
        return await this.getTotalElement();
    }
    async expRezQtyItem1() {
        await this.getCheckoutBtnElement().waitForVisible();
        return await this.getQtyItem1Element().getText();
    }
    async removeFirstItem() {
        await allure.createStep(`Remove first item from the cart`, async () => {
        await this.getRemove1Element().click();
        await this.getRemove1Element().waitForInVisible();
        })()
    }
    async clickCart() {
        await allure.createStep(`Click the cart`, async () => {
        await this.getShoppingCartElement().click();
        })()
    }
    async getTextShopCarSummary() {
        return await this.getShopCartSummaryElement().getText();
    }
    async expRezQtyItem3() {
        return await this.getQtyItem1Element().getText();
    }
    async removeLastItem() {
        await allure.createStep(`Remove last item from the cart`, async () => {
        await this.getRemove2Element().click();
        await this.getRemove2Element().waitForInVisible();
        })()
    }
    
getShoppingCartElement() {
    return new Button(element(cartLocator), 'Cart');
};
getCheckoutBtnElement() {
    return new Button(element(checkoutBtnLocator), 'Checkout button in cart pop up');
};
getTotalElement() {
    return new TextView(element(totalLocator), 'Total in cart pop up');
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