let LoginBtnLocator = by.css('.login');

class IndexPage {
    async open() {
        await browser.get('http://automationpractice.com/index.php');
    }
    async navigateToLoginPage() {
        await this.getLoginBtnElement().click();
    }
    getLoginBtnElement() {
        return  element(LoginBtnLocator);
    }
    
}

module.exports = new IndexPage();