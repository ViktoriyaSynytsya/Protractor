//const random = require("../node_modules/random-js").Random;


getRandomString =  function (characterLength) {
    let randomText = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < characterLength; i++)
        randomText += possible.charAt(Math.floor(Math.random() * possible.length));
    return  randomText + '@gmail.com';
    };
//let random_str = getRandomString(30);
console.log(getRandomString(30))

