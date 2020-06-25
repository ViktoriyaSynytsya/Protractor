let BasePage = require("../base/base.page")
let loginBtnLocator = by.css('.login');

class IndexPage extends BasePage {
    async open() {
        super.open('http://automationpractice.com/index.php');
    }
    async navigateToLoginPage() {
        await this.getLoginBtnElement().click();
    }
    getLoginBtnElement() {
        return  element(loginBtnLocator);
    }
    
}

module.exports = new IndexPage();