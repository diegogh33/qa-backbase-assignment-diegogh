const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": "QA assigment - UI/API Testing",
        "Browser": "Chromium",
        "Platform": process.platform,
        "Executed": "Local"
    }
};

reporter.generate(options);
console.log('✅ Report generated in reports/cucumber-report.html');
