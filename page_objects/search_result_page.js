let BasePage = require("../base/base.page");
let TextView = require("../elements/text.view")

let nameOfFirstProduct = by.css('div>h1')

class SearchResult extends BasePage {

    async getNameOfFirstProduct() {
        return this.getTextOfFirstResult().getText();
    }
    getTextOfFirstResult() {
        return new TextView(element(nameOfFirstProduct), 'first of results');
    }

}
module.exports = new SearchResult();