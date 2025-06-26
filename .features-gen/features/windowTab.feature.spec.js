// Generated from: features\windowTab.feature
import { test } from "playwright-bdd";

test.describe('WindowsTab', () => {

  test.beforeEach('Background', async ({ Given, page, And }) => {
    await Given('the user navigates to DemoQA home page', null, { page }); 
    await And('the user selects the Alerts, Frame & Windows from the menu', null, { page }); 
    await And('the user selects Browser Windows from sub-menu', null, { page }); 
  });
  
  test('TC123789 Verify the page opens in a new tab', { tag: ['@WindowsTab'] }, async ({ When, page, context, And, Then }) => { 
    await When('the user clicks the New Tab button', null, { page, context }); 
    await And('the user switches to the newly opened tab', null, { context }); 
    await Then('the new tab is displayed with the text "This is a sample page"', null, { page }); 
  });

  test('TC223789 Verify page is opened up in new window', { tag: ['@WindowsTab'] }, async ({ When, page, context, And, Then }) => { 
    await When('the user clicks the New Window button', null, { page, context }); 
    await And('the user switches to the newly opened window', null, { context }); 
    await Then('the new window is displayed with the text "This is a sample page"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\windowTab.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":10,"tags":["@WindowsTab"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Alerts, Frame & Windows from the menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user selects Browser Windows from sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user clicks the New Tab button","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user switches to the newly opened tab","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the new tab is displayed with the text \"This is a sample page\"","stepMatchArguments":[{"group":{"start":39,"value":"\"This is a sample page\"","children":[{"start":40,"value":"This is a sample page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":["@WindowsTab"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Alerts, Frame & Windows from the menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user selects Browser Windows from sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user clicks the New Window button","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And the user switches to the newly opened window","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the new window is displayed with the text \"This is a sample page\"","stepMatchArguments":[{"group":{"start":42,"value":"\"This is a sample page\"","children":[{"start":43,"value":"This is a sample page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end