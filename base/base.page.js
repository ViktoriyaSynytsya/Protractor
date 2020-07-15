class BasePage {
    async waitForPageLoaded() {
        await this.getBaseElement().waitForPresence();
    }
    async open(url) {
        await browser.get(url);
    }
    async getTitle() {
        return await browser.getTitle();
        
    }
    async getText() {
        return await browser.getText();
        
    }
   
}

module.exports = BasePage