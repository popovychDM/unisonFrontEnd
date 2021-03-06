// Karma configuration
// Generated on Tue Nov 03 2015 09:10:36 GMT+0200 (Финляндия (зима))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'http://code.jquery.com/jquery-1.11.1.min.js',
        'http://code.jquery.com/ui/1.11.4/jquery-ui.js',

        'lib/angular/angular.min.js',
        'lib/ui-router/release/angular-ui-router.min.js',
        'lib/angular-mocks/angular-mocks.js',

        'js/*.js',
        'js/controllers/*.js',
        'js/directives/*.js',
        'js/filters/*.js',
        'js/partials/*.html',
        'js/plugins/*.js',
        'js/services/*.js',

        'tests/*.js',
        'tests/specs/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
