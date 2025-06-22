// Generated from: features\login.feature
import { test } from "playwright-bdd";

test.describe('LogIn', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('User is on the login page', null, { page }); 
  });
  
  test('TC123456 Verify Successful Login with Valid Credentials', { tag: ['@Login', '@NightlyRun'] }, async ({ When, page, And, Then }) => { 
    await When('user enters "standard_user" and "secret_sauce"', null, { page }); 
    await And('user login', null, { page }); 
    await Then('user is logged-in successfully', null, { page }); 
  });

  test.describe('TC123457 Verify Login With Invalid Credentials', () => {

    test('Example #1', { tag: ['@Login', '@NightlyRun'] }, async ({ When, page, And, Then }) => { 
      await When('user enters invalid "Kishan" and "Patel"', null, { page }); 
      await And('user login', null, { page }); 
      await Then('error message is displayed', null, { page }); 
    });

    test('Example #2', { tag: ['@Login', '@NightlyRun'] }, async ({ When, page, And, Then }) => { 
      await When('user enters invalid "CV" and "Patel"', null, { page }); 
      await And('user login', null, { page }); 
      await Then('error message is displayed', null, { page }); 
    });

  });

  test('TC123458 Verify Successful Log-Out', { tag: ['@Login', '@NightlyRun'] }, async ({ When, page, And, Then }) => { 
    await When('user enters "standard_user" and "secret_sauce"', null, { page }); 
    await And('user login', null, { page }); 
    await Then('user is logged-in successfully', null, { page }); 
    await When('user opens side-menu', null, { page }); 
    await And('user logout', null, { page }); 
    await Then('user is logged-out', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":["@Login","@NightlyRun"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user enters \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"standard_user\"","children":[{"start":13,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"secret_sauce\"","children":[{"start":33,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user login","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then user is logged-in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":20,"tags":["@Login","@NightlyRun"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user enters invalid \"Kishan\" and \"Patel\"","stepMatchArguments":[{"group":{"start":20,"value":"\"Kishan\"","children":[{"start":21,"value":"Kishan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"Patel\"","children":[{"start":34,"value":"Patel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user login","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then error message is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":["@Login","@NightlyRun"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When user enters invalid \"CV\" and \"Patel\"","stepMatchArguments":[{"group":{"start":20,"value":"\"CV\"","children":[{"start":21,"value":"CV","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":29,"value":"\"Patel\"","children":[{"start":30,"value":"Patel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user login","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then error message is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":23,"tags":["@Login","@NightlyRun"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given User is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When user enters \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":12,"value":"\"standard_user\"","children":[{"start":13,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"secret_sauce\"","children":[{"start":33,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And user login","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then user is logged-in successfully","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When user opens side-menu","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And user logout","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then user is logged-out","stepMatchArguments":[]}]},
]; // bdd-data-end