const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'a5ac536-10c7-4ef6-89f3-a62cad78ca6b',
  e2e: {
    baseUrl: 'https://blogdoagi.com.br/',
    env: {
      Url: 'https://blogdoagi.com.br/'

    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
});
