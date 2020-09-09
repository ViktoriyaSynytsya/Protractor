let BasePage = require("../base/base.page")

let randomstring = require("../node_modules/randomstring");


class Utils extends BasePage {

    getRandomEmail() {
        return this.getRandomString(12)+'@gmail.com';;
    }
    getRandomString(characterLength) {
        return randomstring.generate(characterLength);
    }
    async clearCredentials() {
        await this.getEmailInput().clear();
        await this.getPassInput().clear();
    }
    
}
module.exports = new Utils();