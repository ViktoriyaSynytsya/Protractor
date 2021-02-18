
let indexPage = require ("../page_objects/index_page")
let loginPage = require ("../page_objects/login_page")
let myAccountPage = require ("../page_objects/myAccount_page")

describe('Protractor Demo App Login', function () {
    it('successful login', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await indexPage.navigateToLoginPage(); 
        await loginPage.waitForPageLoaded();
        expect(await loginPage.getTitle()).toEqual('Login - My Store');
        await loginPage.login(browser.params.a, browser.params.b);
        expect(await myAccountPage.getTitle()).toEqual('My account - My Store');

    });
});







