const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5ss1ie",
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
