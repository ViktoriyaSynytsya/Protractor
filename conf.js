//const { browser } = require("protractor");



// conf.js
exports.config = {
  directConnect: false,
  SELENIUM_PROMISE_MANAGER: false,


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'

  },

  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./specs/spec.js'],
  onPrepare: async function () {
    console.log('Tests are started');
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(4000);
    let AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
    await jasmine.getEnv().afterEach(async function () {
     await  createScreenShotAllure()

    });
  },

  params: {
    a: "viktoriasynytsa@gmail.com",
    b: "1234567890"
  }
}


async function createScreenShotAllure() {
  let screenshotFile = await browser.takeScreenshot();
  await allure.createAttachment('Screenshot', function () {
    return new Buffer(screenshotFile, 'base64')
  }, 'image/png')();
}