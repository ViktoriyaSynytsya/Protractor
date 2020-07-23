
let indexPage = require ("../page_objects/index_page")
let loginPage = require ("../page_objects/login_page");

//let myAccountPage = require ("../page_objects/myAccount_page")

describe('Protractor Demo App Login', function () {
    it('unsuccessful login', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await indexPage.navigateToLoginPage(); 
        await loginPage.waitForPageLoaded();
        expect(await loginPage.getTitle()).toEqual('Login - My Store');
        await loginPage.login("viktoriasynytsa@gmail.com", "");
        expect(await loginPage.error()).toEqual('Password is required.');
        await browser.sleep(5000);
        await loginPage.clearText();
        await browser.sleep(2000);
        await loginPage.login("viktoriasynytsa@gmail.com", "1234567");
        expect(await loginPage.error()).toEqual('Authentication failed.');
        await browser.sleep(5000);
        await loginPage.clearText();
        await loginPage.login("viktoriasynytsagmail.com", "1234567");
        expect(await loginPage.error()).toEqual('Invalid email address.');
        await browser.sleep(5000);
    });
});
