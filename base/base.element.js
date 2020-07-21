const { browser } = require("protractor");

class BaseElement {
    constructor(protractorElement, nameElement) {
        this.protractorElement = protractorElement;
        this.elementName = nameElement;
        this.expectedConditions = protractor.ExpectedConditions;
    }
    async click() {
        console.log(`Clicking on ${this.elementName}`);
        await this.protractorElement.click();
    }
    
    async getText() {
        console.log(`Show text "${this.elementName}"`);
        return await this.protractorElement.getText();
    }
    async waitForPresence(timeMs = 10000) {
        await browser.wait(this.expectedConditions.presenceOf(this.protractorElement), timeMs);
    }
}

module.exports = BaseElement