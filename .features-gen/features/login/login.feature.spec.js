// Generated from: features\login\login.feature
import { test } from "../../../src/steps/basetest.ts";

test.describe('Login functionality', () => {

  test('Login with valid credentials', { tag: ['@login', '@smoke', '@shiv'] }, async ({ Given, When, Then, loginPage }) => { 
    await Given('the user launches the "Swag Labs" application', null, { loginPage }); 
    await When('the user logs in with username "standard_user" and password "secret_sauce"'); 
    await Then('the user should be redirected to the Products page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@login","@smoke","@shiv"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user launches the \"Swag Labs\" application","stepMatchArguments":[{"group":{"start":22,"value":"\"Swag Labs\"","children":[{"start":23,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user logs in with username \"standard_user\" and password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":31,"value":"\"standard_user\"","children":[{"start":32,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"\"secret_sauce\"","children":[{"start":61,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should be redirected to the Products page","stepMatchArguments":[]}]},
]; // bdd-data-end