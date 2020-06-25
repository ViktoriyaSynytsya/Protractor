class BasePage {
    async open(url) {
        await browser.get(url);
    }
    async getTitle() {
        return await browser.getTitle();
        
    }
}

module.exports = BasePage