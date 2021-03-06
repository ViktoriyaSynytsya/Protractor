let  BaseElement  = require ("../base/base.element");

class Input extends BaseElement {
    async sendKeys(text) {
        console.log(`Sending keys [${text}] to "${this.elementName}"`);
        await this.protractorElement.sendKeys(text);
    }
    async clear() {
        await this.protractorElement.clear();
    }
}

module.exports = Input;