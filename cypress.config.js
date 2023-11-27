const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')




module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 4000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {downloadFile})

    },
  },
});
