module.exports = {
  default: {
    // require: ["./support/world.ts", "./support/hooks.ts", "./steps/**/*.ts"],
    format: ["progress", "json:reports/cucumber-report.json"],
    defaultTimeout: 10000, 
    worldParameters: {
      browser: "chromium", 
    },
    requireModule: ["ts-node/register"],
  },
};
