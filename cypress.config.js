const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cypressEslint())
    },
    baseUrl: 'https://qauto.forstudy.space'
  },
});
