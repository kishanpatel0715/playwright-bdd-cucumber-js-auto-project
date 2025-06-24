// Generated from: features\practiceForm.feature
import { test } from "playwright-bdd";

test.describe('PracticeForm', () => {

  test.beforeEach('Background', async ({ Given, page, And }) => {
    await Given('the user navigates to DemoQA home page', null, { page }); 
    await And('the user selects the Forms from menu', null, { page }); 
  });
  
  test.only('TC123459 Verify successful Practice Form submission', { tag: ['@PracticeForm', '@only'] }, async ({ When, page, And, Then }) => { 
    await When('the user selects Practice Form from the sub-menu', null, { page }); 
    await And('the user enters following details:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"First Name"},{"value":"Kishan"}]},{"cells":[{"value":"Last Name"},{"value":"Patel"}]},{"cells":[{"value":"Email"},{"value":"kcpatel07150715@gmail.com"}]},{"cells":[{"value":"Gender"},{"value":"Male"}]},{"cells":[{"value":"Mobile"},{"value":"5879735451"}]},{"cells":[{"value":"Hobbies"},{"value":"Reading"}]},{"cells":[{"value":"Picture"},{"value":"C:\\Users\\kisha\\Pictures\\Screenshots\\Kohli.png"}]},{"cells":[{"value":"Current Address"},{"value":"25 red sky"}]},{"cells":[{"value":"State"},{"value":"NCR"}]},{"cells":[{"value":"City"},{"value":"Delhi"}]}]}}, { page }); 
    await And('the user submits the form', null, { page }); 
    await Then('the form is submitted successfully', null, { page }); 
    await And('the following details are displayed:', {"dataTable":{"rows":[{"cells":[{"value":"Field"},{"value":"Value"}]},{"cells":[{"value":"First Name"},{"value":"Kishan"}]},{"cells":[{"value":"Last Name"},{"value":"Patel"}]},{"cells":[{"value":"Email"},{"value":"kcpatel07150715@gmail.com"}]},{"cells":[{"value":"Gender"},{"value":"Male"}]},{"cells":[{"value":"Mobile"},{"value":"5879735451"}]},{"cells":[{"value":"Hobbies"},{"value":"Reading"}]},{"cells":[{"value":"Picture"},{"value":"Kohli.png"}]},{"cells":[{"value":"Current Address"},{"value":"25 red sky"}]},{"cells":[{"value":"State"},{"value":"NCR"}]},{"cells":[{"value":"City"},{"value":"Delhi"}]}]}}, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\practiceForm.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":10,"tags":["@PracticeForm","@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Forms from menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user selects Practice Form from the sub-menu","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user enters following details:","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And the user submits the form","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the form is submitted successfully","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And the following details are displayed:","stepMatchArguments":[]}]},
]; // bdd-data-end