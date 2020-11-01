let indexPage = require ("../page_objects/index_page")
let searchPage = require("../page_objects/search_page");
let searchResultPage = require("../page_objects/search_result_page");

describe('Protractor Demo App Search', function () {
    it('Search', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await searchPage.search('dress'); 
        //await search_page.waitForPageLoaded();
        expect(await searchPage.getCountOfResults()).toEqual('7 results have been found.');
        await searchPage.clickFirstResult();
        expect(await searchResultPage.getNameOfFirstProduct()).toEqual('Printed Summer Dress');
    });
});