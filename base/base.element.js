const { browser } = require("protractor");

class BaseElement {
    constructor(protractorElement, nameElement) {
        this.protractorElement = protractorElement;
        this.nameElement = nameElement;
        this.expectedConditions = protractor.ExpectedConditions;
    }
    async click() {
        console.log(`Clicking on ${this.elementName}`);
        await this.protractorElement.click();
    }
    async sendKeys(text) {
        console.log(`Sending keys [${text}] to "${this.elementName}"`);
        await this.protractorElement.sendKeys(text);
    }
    async getText() {
        console.log(`Show text "${this.elementName}"`);
        await this.protractorElement.getText();
    }
    async waitForPresence(timeMs = 10000) {
        await browser.wait(this.expectedConditions.presenceOf(this.protractorElement), timeMs);
    }
}

module.exports = BaseElement