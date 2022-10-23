const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    retries: {
      runMode: 0,
      openMode: 0,
      },
      screenshotOnRunFailure: true,
      screenshotsFolder: 'cypress/screenshots',
      uncaught: false,
  },
});
