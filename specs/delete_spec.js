let MenuPage = require ("../page_objects/menu_page")
let indexPage = require ("../page_objects/index_page")
let CartPage = require ("../page_objects/cart_page")
let MainPage = require ("../page_objects/main_page")

describe('Protractor Demo Delete Items', function () {
    it('Delete Items from Cart', async function () {
        await indexPage.open();
        await MenuPage.navigateToProduct();
        await MenuPage.clickToAddProducts();
        await CartPage.hoverCart();
        expect(await CartPage.expRezCheckoutBtn1()).toBeTrue();
        expect(await CartPage.expRezQtyItem1()).toEqual('3');
        await CartPage.removeFirstItem();
        expect(await CartPage.expRezCheckoutBtn1()).toBeTrue();
        expect(await CartPage.expRezQtyItem1()).toEqual('2');
        await CartPage.clickCart();
        expect(await CartPage.getTitle()).toEqual('Shopping-cart summary');
        await CartPage.removeLastItem();
        expect(await CartPage.expRezQtyItem1()).toEqual('1');
        await MainPage.navigateToMainPage();
        expect(await MainPage.expRezQtyItem()).toEqual('1');
        

    });
});