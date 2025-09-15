Feature: Login functionality

  @login @smoke @shiv
  Scenario: Login with valid credentials
    Given the user launches the "Swag Labs" application
    When the user logs in with username "standard_user" and password "secret_sauce"
    Then the user should be redirected to the Products page

  @login @negative
  Scenario: Login with invalid credentials
    Given the user launches the application
    When the user logs in with username "invalid_user" and password "wrong_pass"
    Then an error message "Epic sadface: Username and password do not match any user in this service" should be displayed
