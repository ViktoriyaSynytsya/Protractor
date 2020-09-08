let BaseElement  = require ("../base/base.element");
let Button = require("../elements/button.element")

class Dropdown extends BaseElement {

    async open() {
        await this.protractorElement.click();
    }
    async selectItem(optionText) {
        new Button(element(by.xpath("//option[contains(text(), '"+optionText+"')]")), 'Option').click();
        
    };
    
}

module.exports = Dropdown;


