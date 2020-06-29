class BasePage {
    async waitForPageLoaded() {
        await this.getBaselement().waitForPresence();
    }
    async open(url) {
        await browser.get(url);
    }
    async getTitle() {
        return await browser.getTitle();
        
    }
}

module.exports = BasePage