let randomstring = require("../node_modules/randomstring");


class Utils  {

    getRandomEmail() {
        return this.getRandomString(12)+'@gmail.com';;
    }
    getRandomString(characterLength) {
        return randomstring.generate(characterLength);
    }
    
    
}
module.exports = new Utils();