// Generated from: features\downloadUpload.feature
import { test } from "playwright-bdd";

test.describe('DownloadUpload', () => {

  test.beforeEach('Background', async ({ Given, page, And }) => {
    await Given('the user navigates to DemoQA home page', null, { page }); 
    await And('user selects the Elements from menu', null, { page }); 
    await And('user selects Upload and Download from sub-menu', null, { page }); 
  });
  
  test('TC912345 Verify successful file download', { tag: ['@DownloadUpload'] }, async ({ When, page, Then }) => { 
    await When('the user downloads the file', null, { page }); 
    await Then('the file is downloaded successfully', null, { page }); 
  });

  test('TC912346 Verify successful file upload', { tag: ['@DownloadUpload'] }, async ({ When, page, Then }) => { 
    await When('the user uploads the file', null, { page }); 
    await Then('the file is uploaded successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\downloadUpload.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":10,"tags":["@DownloadUpload"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And user selects the Elements from menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And user selects Upload and Download from sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user downloads the file","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the file is downloaded successfully","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":["@DownloadUpload"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And user selects the Elements from menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And user selects Upload and Download from sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user uploads the file","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the file is uploaded successfully","stepMatchArguments":[]}]},
]; // bdd-data-end