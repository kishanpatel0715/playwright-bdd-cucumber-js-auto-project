// Generated from: features\alerts.feature
import { test } from "playwright-bdd";

test.describe('Alerts', () => {

  test.beforeEach('Background', async ({ Given, page, And }) => {
    await Given('the user navigates to DemoQA home page', null, { page }); 
    await And('the user selects the Alerts, Frame & Windows from the menu', null, { page }); 
    await And('the user selects Alerts from the sub-menu', null, { page }); 
  });
  
  test('TC423459 Verify alert text and accept behavior', { tag: ['@Alerts'] }, async ({ When, page, Then, And }) => { 
    await When('the user opens and accepts the regular alert', null, { page }); 
    await Then('an alert is displayed with the text "You clicked a button"', null, { page }); 
    await And('the alert is no longer visible', null, { page }); 
  });

  test.only('TC523459 Verify alert text when it appeares after 5 seconds and accept behavior', { tag: ['@Alerts', '@only'] }, async ({ When, page, Then, And }) => { 
    await When('the user opens and accepts the delayed alert', null, { page }); 
    await Then('delayed alert is displayed with the text "This alert appeared after 5 seconds"'); 
    await And('the alert is no longer visible', null, { page }); 
  });

  test('TC623459 Verify cancel action for confirm box', { tag: ['@Alerts'] }, async ({ When, page, Then, And }) => { 
    await When('the user opens and cancels the confirm box', null, { page }); 
    await Then('an alert is displayed with the text "Do you confirm action?"', null, { page }); 
    await And('the alert is no longer visible', null, { page }); 
    await And('"You selected Cancel" message is displayed', null, { page }); 
  });

  test('TC723459 Verify prompt', { tag: ['@Alerts'] }, async ({ When, page, Then, And }) => { 
    await When('the user opens and enters "Kishan Patel" in the prompt box', null, { page }); 
    await Then('an alert is displayed with the text "Please enter your name"', null, { page }); 
    await And('"You entered Kishan Patel" prompt message is displayed', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\alerts.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":10,"tags":["@Alerts"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Alerts, Frame & Windows from the menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user selects Alerts from the sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the user opens and accepts the regular alert","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then an alert is displayed with the text \"You clicked a button\"","stepMatchArguments":[{"group":{"start":36,"value":"\"You clicked a button\"","children":[{"start":37,"value":"You clicked a button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the alert is no longer visible","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":["@Alerts","@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Alerts, Frame & Windows from the menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user selects Alerts from the sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user opens and accepts the delayed alert","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then delayed alert is displayed with the text \"This alert appeared after 5 seconds\"","stepMatchArguments":[{"group":{"start":41,"value":"\"This alert appeared after 5 seconds\"","children":[{"start":42,"value":"This alert appeared after 5 seconds","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the alert is no longer visible","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":["@Alerts"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Alerts, Frame & Windows from the menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user selects Alerts from the sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user opens and cancels the confirm box","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then an alert is displayed with the text \"Do you confirm action?\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Do you confirm action?\"","children":[{"start":37,"value":"Do you confirm action?","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And the alert is no longer visible","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And \"You selected Cancel\" message is displayed","stepMatchArguments":[{"group":{"start":0,"value":"\"You selected Cancel\"","children":[{"start":1,"value":"You selected Cancel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":27,"tags":["@Alerts"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user navigates to DemoQA home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user selects the Alerts, Frame & Windows from the menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user selects Alerts from the sub-menu","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the user opens and enters \"Kishan Patel\" in the prompt box","stepMatchArguments":[{"group":{"start":26,"value":"\"Kishan Patel\"","children":[{"start":27,"value":"Kishan Patel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then an alert is displayed with the text \"Please enter your name\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Please enter your name\"","children":[{"start":37,"value":"Please enter your name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And \"You entered Kishan Patel\" prompt message is displayed","stepMatchArguments":[{"group":{"start":0,"value":"\"You entered Kishan Patel\"","children":[{"start":1,"value":"You entered Kishan Patel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end