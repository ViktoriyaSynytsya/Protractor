let indexPage = require ("../page_objects/index_page")
let loginPage = require ("../page_objects/login_page");
let utils = require("../page_objects/Utils");
let regPage = require ("../page_objects/registration_page");
let accAfterReg_page = require ("../page_objects/accAfterReg_page");

describe('Protractor Demo App Login', function () {
    it('registration', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await indexPage.navigateToLoginPage(); 
        await loginPage.waitForPageLoaded();
        expect(await loginPage.getTitle()).toEqual('Login - My Store');
        await loginPage.sendEmail(utils.getRandomEmail());
        await loginPage.submitReg();
        expect(await regPage.getTextForRegForm()).toEqual('Title');
        await regPage.registrationForm('Viktoria','Synytsya',"1234567890","Viktoriya2","Synytsya2", 
        "Demnyanska St.","Lviv","Hawaii","23456","United States","380677543321","Naukova St.")
        await regPage.getTextFromRegisterForm();
        expect(await accAfterReg_page.getTextForSuccessReg()).toContain('Welcome to your account')
    });
});
