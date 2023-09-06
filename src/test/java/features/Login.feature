
Feature: Login Functionality
  As a user
  I want to verify the message displayed for not valid credentials
  So that I can understand the reason for the login failure

  Scenario: User enters not valid credentials
    Given The user is on the login page
    When the user enters a not valid username "invaliduser" and password "invalidpassword"
    And the user clicks the "Login" button
    Then the user should see a message "Invalid credentials. Please check your username and password."

  Scenario: User enters correct username but incorrect password
    Given The user is on the login page
    When the user enters a correct username and an incorrect password
    And the user clicks the "Login" button
    Then the user should stay on the login page

  Scenario: User enters incorrect username but correct password
    Given The user is on the login page
    When the user enters an incorrect username and a valid password
    And the user clicks the "Login" button
    Then the user should stay on the login page

  Scenario: User enters a valid username and password
    Given The user is on the login page
    When The user enters a valid username and a valid password
    And the user clicks the "Login" button
    Then the user should be successfully logged in
