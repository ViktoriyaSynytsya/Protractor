let BasePage = require ("../base/base.page");

let textloginLocator = by.css('.info-account');

class MyAccountPage extends BasePage {

    getBaselement() {
        return  new TextView(element(textloginLocator), 'MyAccount page base element');
    }

}

module.exports = new MyAccountPage();
