Feature: Cart functionality

  @cart @smoke
  Scenario: Add product to cart
    Given the user logs in with username "standard_user" and password "secret_sauce"
    When the user adds product "Sauce Labs Backpack" to the cart
    Then the cart count should be "1"

  @cart @regression
  Scenario: Remove product from cart
    Given the user logs in with username "standard_user" and password "secret_sauce"
    And the user adds product "Sauce Labs Bike Light" to the cart
    When the user removes product "Sauce Labs Bike Light" from the cart
    Then the cart count should be "0"
