
// describe('Protractor Demo App', function () {
//     it('should add one and two', async function () {
//         browser.get('http://juliemr.github.io/protractor-demo/');
//         await element(by.model('first')).sendKeys(browser.params.a);
//         await element(by.model('second')).sendKeys(browser.params.b);
//         await element(by.id('gobutton')).click();
//         expect(await element(by.binding('latest')).getText());
//         expect(await element(by.binding('latest')).getText()).toEqual('7');

// const { browser } = require("protractor");

//     });
// });


// describe('Protractor Demo App Login', function () {
//     it('should click login', async function () {
//         await browser.get('http://automationpractice.com/index.php');
//         await element(by.css('.login')).click();
//         await browser.sleep(2000);
//         expect(await browser.getTitle()).toEqual("Login - My Store");
//         await element(by.css('#email')).sendKeys(browser.params.a);
//         await element(by.css('#passwd')).sendKeys(browser.params.b);
//         await element(by.css('#SubmitLogin')).click();
//         expect(await browser.getTitle()).toEqual('My account - My Store');

//     });
// });

let indexPage = require ("../page_objects/index_page")
let loginPage = require ("../page_objects/login_page")
let myAccountPage = require ("../page_objects/myAccount_page")

describe('Protractor Demo App Login', function () {
    it('should click login', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await indexPage.navigateToLoginPage(); 
        await loginPage.waitForPageLoaded();
        expect(await loginPage.getTitle()).toEqual('Login - My Store');
        await loginPage.login(browser.params.a, browser.params.b);
        expect(await myAccountPage.getTitle()).toEqual('My account - My Store');

    });
});







