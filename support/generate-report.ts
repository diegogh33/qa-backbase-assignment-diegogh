const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": "STAGING",
        "Browser": "N/A - API Testing",
        "Platform": process.platform,
        "Executed": "Local"
    }
};

reporter.generate(options);
console.log('✅ Reporte generado en reports/cucumber-report.html');
