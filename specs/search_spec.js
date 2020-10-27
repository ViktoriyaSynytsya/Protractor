let indexPage = require ("../page_objects/index_page")
let search_page = require("../page_objects/search_page");

describe('Protractor Demo App Search', function () {
    it('Search', async function () {
        await indexPage.open();
        await indexPage.waitForPageLoaded();
        await search_page.search('dress'); 
        //await search_page.waitForPageLoaded();
        expect(await search_page.getCountOfResults()).toEqual('7 results have been found.');
        await search_page.getFirstResult();
        expect(await search_page.getNameOfFirstProduct()).toEqual('Printed Summer Dress');
    });
});