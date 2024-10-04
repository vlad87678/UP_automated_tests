const { defineConfig } = require('cypress')

const path = require('path');

module.exports = defineConfig ({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 180000,
  responseTimeout: 120000,
  hideXHR: true,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/jsonReports',
      reportFilename: "[status]_[name]",
      quiet: true,
      overwrite: false,
      html: false,
      json: true
    },
  },

  env: {
    links: {
      upSuperAdmin: 'https://test.up.expertnetwork.ro:32001/',
      UPortalLogin: 'https://api.test.up.expertnetwork.ro:32002/Auth/login',
    },
    _email: 'lum77y@ulcemail.eu',
    _password: 'updatepro10#',
  },

  e2e: {
    baseUrl: 'https://test.up.expertnetwork.ro:32001',
    excludeSpecPattern: [],
  },
  
});
