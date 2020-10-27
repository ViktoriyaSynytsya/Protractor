let BasePage = require("../base/base.page");
let Input = require("../elements/input.element")
let Button = require("../elements/button.element")
let TextView = require("../elements/text.view")

let searchFieldLocator = by.css('#search_query_top')
let searchIconLocator = by.css('[name=submit_search]')
let firstResultLocator = by.xpath(`(//a[contains(@class, 'product-name')])[11]`)
//let countResults = by.xpath(`//span[contains(text(),'7 results have been found')]`)
let countResults = by.css(`.heading-counter`)
let nameOfFirstProduct = by.css('div>h1')

class Search extends BasePage {
    async search(text) {
        await allure.createStep(`Search ${text}`, async () => {
        await this.getSearchInput().sendKeys(text);
        await this.getSearchIcon().click();
        })()
    }
    async getFirstResult() {
        await this.getSearchFirstResult().click();
        }
     async getCountOfResults() {
        return this.getTextCountResults().getText();
        }
     async getNameOfFirstProduct() {
        return this.getTextOfFirstResult().getText();
         }

    getSearchInput() {
        return new Input(element(searchFieldLocator), 'search input');
        }
    getSearchIcon() {
        return new Button(element(searchIconLocator), 'search icon');
        }
    getSearchFirstResult() {
        return new Button(element(firstResultLocator), 'first result');
        }
    getTextCountResults() {
        return new TextView(element(countResults), 'count of results');
        }
    getTextOfFirstResult() {
        return new TextView(element(nameOfFirstProduct), 'first of results');
        }
}

module.exports = new Search();