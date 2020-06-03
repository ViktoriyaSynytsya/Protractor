// conf.js
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'browserName': 'firefox'

  },

  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  onPrepare: function () {
    console.log('Tests are started')

  },
  params: {
      a: '3',
      b: '4'
    }
}