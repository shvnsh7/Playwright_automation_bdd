import { Given, When, Then} from './basetest'
import { Expect } from "@playwright/test";



Given('the user launches the {string} application', async ({loginPage}, arg) => {
  await loginPage.navigate();
});

When('the user logs in with username {string} and password {string}', async ({}, arg, arg1) => {
  // Step: When the user logs in with username "standard_user" and password "secret_sauce"
  // From: features\login\login.feature:6:5
});

Then('the user should be redirected to the Products page', async ({}) => {
  // Step: Then the user should be redirected to the Products page
  // From: features\login\login.feature:7:5
});

