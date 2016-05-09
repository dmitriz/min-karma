// karma.conf.js

module.exports = function (config) {
  config.set({

    // Jasmine not required, use whichever framework you want 
    // other frameworks available: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // files / glob patterns to load
    // Tip. Keep your tests next to testees for better cohesion
    files: [

      // load all JavaScript files inside `demo` folder
      'demo/**/*.js'
    ],

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
