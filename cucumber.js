module.exports = {
  default: {
    format: ["progress", "json:reports/cucumber-report.json"],
    defaultTimeout: 10000, 
    worldParameters: {
      browser: "chromium", 
    },
    requireModule: ["ts-node/register"],
  },
};
