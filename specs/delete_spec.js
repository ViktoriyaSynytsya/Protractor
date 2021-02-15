let MenuPage = require ("../page_objects/menu_page")
let indexPage = require ("../page_objects/index_page")
let CartPage = require ("../page_objects/cart_page")
let MainPage = require ("../page_objects/main_page");

describe('Protractor Demo Delete Items', function () {
    it('Delete Items from Cart', async function () {
        await indexPage.open();
        await MenuPage.navigateToProduct();
        await MenuPage.clickToAddProducts();
        await CartPage.hoverCart();
        //await browser.sleep(10000);
        expect(await CartPage.expRezCheckoutBtn1()).toEqual(true);
        expect(await CartPage.expRezQtyItem1()).toEqual('3');
        await CartPage.removeFirstItem();
        // browser.sleep(10000);
        expect(await CartPage.expRezQtyItem1()).toEqual('2');
        await CartPage.clickCart();
        expect(await CartPage.getTextShopCarSummary()).toEqual('Your shopping cart');
        await CartPage.hoverCart();
        await CartPage.removeLastItem();
        expect(await CartPage.expRezQtyItem1()).toEqual('1');
        await MainPage.navigateToMainPage();
        expect(await MainPage.expRezQtyItem()).toEqual('1');
    });
});

