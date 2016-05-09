// karma.conf.js

module.exports = function (config) {
  config.set({

    // frameworks available: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // files / glob patterns to load
    // Tip. Keep your tests next to testees for better cohesion
    files: [

      // load the code to test
      'demo/add.js',
      // load all test files inside `demo`
      'demo/**/*_test.js'
    ],

    preprocessors: {

      // add webpack to pre-process test files loading CommonJS modules
      'demo/**/*-module_test.js': ['webpack']
    },


    // Browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome']
  })
}
