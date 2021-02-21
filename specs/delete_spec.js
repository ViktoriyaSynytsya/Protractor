let menuPage = require ("../page_objects/menu_page_delete")
let indexPage = require ("../page_objects/index_page")
let cartPage = require ("../page_objects/cart_page")
let mainPage = require ("../page_objects/main_page");

describe('Protractor Demo Delete Items', function () {
    it('Delete Items from Cart', async function () {
        await indexPage.open();
        await menuPage.navigateToProduct();
        await menuPage.clickToAddProducts();
        await cartPage.hoverCart();
        expect(await cartPage.expRezCheckoutBtn1()).toEqual(true);
        expect(await cartPage.expRezQtyItem1()).toEqual('3');
        await cartPage.removeFirstItem();
        expect(await cartPage.expRezQtyItem1()).toEqual('2');
        await cartPage.clickCart();
        expect(await cartPage.getTextShopCarSummary()).toEqual('Your shopping cart');
        await cartPage.hoverCart();
        await cartPage.removeLastItem();
        expect(await cartPage.expRezQtyItem1()).toEqual('1');
        await mainPage.navigateToMainPage();
        expect(await mainPage.expRezQtyItem()).toEqual('1');
    });
});

