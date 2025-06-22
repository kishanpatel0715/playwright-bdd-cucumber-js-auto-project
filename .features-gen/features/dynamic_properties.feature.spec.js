// Generated from: features\dynamic_properties.feature
import { test } from "playwright-bdd";

test.describe('Dynamic_Properties', () => {

  test.beforeEach('Background', async ({ Given, page, And }) => {
    await Given('the user navigates to DemoQA home page', null, { page }); 
    await And('user selects the Elements from menu', null, { page }); 
    await And('user selects Dynamic Properties from sub-menu', null, { page }); 
  });
  
  test('TC223459 Verify visibility of the button', { tag: ['@DynamicProperties'] }, async ({ Then, page }) => { 
    await Then('after 6 seconds, button is visible', null, { page }); 
  });

  test('TC323459 Verify button gets enabled', { tag: ['@DynamicProperties'] }, async ({ Then, page }) => { 
    await Then('after 6 seconds, button is enabled', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\dynamic_properties.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":10,"tags":["@DynamicProperties"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And user selects the Elements from menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And user selects Dynamic Properties from sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then after 6 seconds, button is visible","stepMatchArguments":[{"group":{"start":6,"value":"6","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":16,"pickleLine":13,"tags":["@DynamicProperties"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And user selects the Elements from menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And user selects Dynamic Properties from sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then after 6 seconds, button is enabled","stepMatchArguments":[{"group":{"start":6,"value":"6","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end