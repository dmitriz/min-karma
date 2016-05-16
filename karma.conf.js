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
      'demo/**/min-karma-*.js'
    ],

    // Browsers available include:
    // - Chrome and ChromeCanary (install `karma-chrome-launcher`)
    // - Firefox (install `karma-firefox-launcher` first)
    // - Opera  (install `karma-opera-launcher` first)
    // - Safari (install `karma-safari-launcher` first)
    // - IE (install `karma-ie-launcher` first)
    // - PhantomJS  (install `karma-phantomjs-launcher`)
    browsers: ['Chrome']
  })
}
