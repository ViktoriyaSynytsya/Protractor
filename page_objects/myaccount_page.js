let BasePage = require ("../base/base.page");

let TextView = require("../elements/text.view")

let textloginLocator = by.css('.info-account');



class MyAccountPage extends BasePage {

    getBaseElement() {
        return  new TextView(element(textloginLocator), 'MyAccount page base element');
    }

}

module.exports = new MyAccountPage();
