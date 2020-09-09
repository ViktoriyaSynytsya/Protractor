let indexPage = require ("../page_objects/index_page")
let loginPage = require ("../page_objects/login_page");
const { login } = require("../page_objects/login_page");
let utils = require("../page_objects/Utils");

describe('Protractor Demo App Login', function () {
    it('registration', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await indexPage.navigateToLoginPage(); 
        await loginPage.waitForPageLoaded();
        expect(await loginPage.getTitle()).toEqual('Login - My Store');
        await loginPage.sendEmail(utils.getRandomEmail());
        await loginPage.createAnAccout();
        expect(await loginPage.getTextForRegForm()).toEqual('Title');
        await loginPage.registrationForm('Viktoria','Synytsya',"1234567890","Viktoriya2","Synytsya2", 
        "Demnyanska St.","Lviv","Hawaii","23456","United States","380677543321","Naukova St.")
        await loginPage.getTextFromRegisterForm();
        expect(await loginPage.getTextForSuccessReg()).toContain('Welcome to your account')
    });
});
