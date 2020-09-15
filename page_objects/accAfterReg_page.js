let BasePage = require("../base/base.page")
let TextView = require("../elements/text.view")

let successfulReg = by.css('.info-account')

class Registration extends BasePage {
    async getTextForSuccessReg() {
        return await this.getTextforExpect().getText();
      }

    getTextforExpect() {
        return new TextView(element(successfulReg), 'Text Except Successful Reg');
    }
}
module.exports = new Registration();