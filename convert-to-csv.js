const fs = require('fs');
const path = require('path');

const reportsDir = path.join(__dirname, 'cypress', 'reports', 'jsonReports');
const outputDir = path.join(__dirname, 'cypress', 'reports', 'csvReports');
fs.mkdirSync(outputDir, { recursive: true });

const jsonFiles = fs.readdirSync(reportsDir).filter(file => file.endsWith('.json'));

if (jsonFiles.length > 0) {
  jsonFiles.forEach(jsonFile => {
    const jsonFilePath = path.join(reportsDir, jsonFile);
    const outputPath = path.join(outputDir, `${path.parse(jsonFile).name}-results.csv`);
    const csvContent = ['Test Name,Pass/Fail,Error Message'];

    try {
      const rawResults = fs.readFileSync(jsonFilePath, 'utf-8');
      const results = JSON.parse(rawResults);

      if (results.results && results.results.length > 0 && results.results[0].suites) {
        results.results[0].suites.forEach(suite => {
          suite.tests.forEach(test => {
            const status = test.skipped ? 'Skipped' : (test.pass ? 'Pass' : 'Fail');
            const errorMessage = test.err && test.err.message ? test.err.message.replace(/\n/g, ' ') : 'N/A';
            csvContent.push(`${test.title},${status},${errorMessage}`);
          });
        });
      } else {
        console.log(`No test suites found in ${jsonFile}. Skipping.`);
      }

      fs.writeFileSync(outputPath, csvContent.join('\n'));
      console.log(`CSV report for ${jsonFile} generated successfully.`);
    } catch (error) {
      console.error(`Error processing ${jsonFile}: ${error}`);
    }
  });
} else {
  console.log(`No .json files found in the ${reportsDir} folder. No conversion to .csv performed.`);
}
