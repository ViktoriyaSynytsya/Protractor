let email = by.css('#email')
let password = by.css('#passwd')
let submitbtn = by.css('#SubmitLogin')

class LoginPage {
    async getTitle() {
        await browser.sleep(2000);
        expect(await browser.getTitle()).toEqual('Login - My Store');
    }
    async login() {
        await element(email).sendKeys(browser.params.a);
        await element(password).sendKeys(browser.params.b);
        await element(submitbtn).click();
    } 
    
}

module.exports = new LoginPage();