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
    async mouseMove() {
        console.log(`Clicking on ${this.elementName}`);
        await browser.actions().mouseMove(this.protractorElement).perform();  
    }
    async waitForVisible(timeMs = 10000) {
        await browser.wait(this.expectedConditions.visibilityOf(this.protractorElement), timeMs);
    }
    async waitForInVisible(timeMs = 10000) {
        await browser.wait(this.expectedConditions.invisibilityOf(this.protractorElement), timeMs);
    }
    async isDisplayed() {
        return await this.protractorElement.isDisplayed();
    }
}

module.exports = BaseElement