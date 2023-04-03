const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
//const { pa11y } = require("@cypress-audit/pa11y");

module.exports = defineConfig({
  projectId: "85dn8c",

  
    chromeWebSecurity: false,
  

  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        lighthouse: lighthouse(),
        //pa11y: pa11y(console.log.bind(console)),
      });
    },
    baseUrl: "https://www.lego.com/pl-pl",
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: true,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // retries: {
    //   runMode: 0,
    //   openMode:1
    // },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
});
