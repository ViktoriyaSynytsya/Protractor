// conf.js
exports.config = {
  directConnect: false,
  SELENIUM_PROMISE_MANAGER: false,
  

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: async function () {
    console.log('Tests are started');
    browser.waitForAngularEnabled(false);
    

  },
  params: {
      a: 'viktoriasynytsa@gmail.com',
      b: '1234567890'
    }
}