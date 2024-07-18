const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    env: {
      username: 'Admin',
      password: 'admin123',
      usernameInvalid: 'usernameInvalid',
      passwordInvalid: 'passwordInvalid'
    },
    setupNodeEvents(on, config) {
          
    //specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    },
  },
});

