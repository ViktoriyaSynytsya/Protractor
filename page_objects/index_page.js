let BasePage = require("../base/base.page")

let Button = require("../elements/button.element");
const TextView = require("../elements/text.view");

let loginBtnLocator = by.css('.login');


class IndexPage extends BasePage {
    async open() {
        super.open('http://automationpractice.com/index.php');
    }
  
    async navigateToLoginPage() {
        await this.getLoginBtnElement().click();
    }
    getLoginBtnElement() {
        return  new Button(element(loginBtnLocator), 'Sign In');
    }
    getBaselement() {
        return  new Button(element(loginBtnLocator), 'Index page base element');
    }
    
}

module.exports = new IndexPage();