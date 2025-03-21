module.exports = {
  default: {
    require: ["./support/world.ts", "./support/hooks.ts", "./steps/**/*.ts"],
    format: ["progress", "json:reports/cucumber-report.json"],
    worldParameters: {
      browser: "chromium", // Puedes cambiar a 'firefox' o 'webkit'
    },
    requireModule: ["ts-node/register"],
  },
};
