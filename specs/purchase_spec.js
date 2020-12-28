
let confirmationOrder_page = require("../page_objects/confirmationOrder_page");
let indexPage = require ("../page_objects/index_page")
let loginPage = require ("../page_objects/login_page");
let menu_page = require("../page_objects/menu_page");
let myAccountPage = require ("../page_objects/myAccount_page");
let payment_page = require("../page_objects/payment_page");
let product_page = require("../page_objects/product_page");
let shipping_page = require("../page_objects/shipping_page");
let shoppingCart_page = require("../page_objects/shoppingCart_page");

describe('Protractor Demo App Login', function () {
    it('successful login', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await indexPage.navigateToLoginPage(); 
        await loginPage.waitForPageLoaded();
        expect(await loginPage.getTitle()).toEqual('Login - My Store');
        await loginPage.login(browser.params.a, browser.params.password);
        expect(await myAccountPage.getTitle()).toEqual('My account - My Store');
    });
});

describe('Protractor Demo App Purchase', function () {
    it('successful purchase', async function () {
        await menu_page.navigateToTshirt();
        expect(await product_page.getTextOfProductPage()).toEqual('> Women>Tops>T-shirts');
        await product_page.getViewList();
        expect(await product_page.displayViewList()).toEqual(true);
        await product_page.addToCart();
        //await browser.wait(5000);
        expect(await product_page.displayAddedProductTitle()).toEqual(true);
        await product_page.proceedToCheckoutProductPage();
        expect(await shoppingCart_page.getTextShoppingCart()).toEqual('Your shopping cart');
        await shoppingCart_page.clearQuantityInput();
        await shoppingCart_page.proceedToCheckoutShoppingCart('3');
        expect(await shipping_page.getTextShippingPage()).toEqual('SHIPPING');
        await shipping_page.proceedToCheckoutShipping();
        expect(await payment_page.getTextPaymentMethodPage()).toEqual('Your payment method');
        await payment_page.paymentByCheck();
        expect(await confirmationOrder_page.getTextCheckPayment()).toEqual('Check payment');
        await confirmationOrder_page.confirmOrder();
        expect(await confirmationOrder_page.getTextConfirmOrder()).toEqual('Order confirmation');
    });
});