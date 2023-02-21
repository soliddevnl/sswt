const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: process.env.WEB_TRACKER_HOST + ":" + process.env.WEB_TRACKER_PORT,
    specPattern: "tests/acceptance/*.spec.ts",
  },
});
