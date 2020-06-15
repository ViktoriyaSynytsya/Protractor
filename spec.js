
// describe('Protractor Demo App', function () {
//     it('should add one and two', async function () {
//         browser.get('http://juliemr.github.io/protractor-demo/');
//         await element(by.model('first')).sendKeys(browser.params.a);
//         await element(by.model('second')).sendKeys(browser.params.b);
//         await element(by.id('gobutton')).click();
//         expect(await element(by.binding('latest')).getText());
//         expect(await element(by.binding('latest')).getText()).toEqual('7');

//     });
// });


describe('Protractor Demo App Login', function () {
    it('should click login', async function () {
        await browser.get('http://automationpractice.com/index.php');
        await element(by.css('.login')).click();
        expect(await browser.getTitle()).toEqual('Login - My Store');
        await element(by.css('#email')).sendKeys(browser.params.a);
        await element(by.css('#passwd')).sendKeys(browser.params.b);
        await element(by.css('#SubmitLogin')).click();
        expect(await browser.getTitle()).toEqual('My account - My Store');

    });
});







