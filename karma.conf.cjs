module.exports = config => {
  config.set({
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-coverage')
    ],
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    restartOnFileChange: true
  });
};
