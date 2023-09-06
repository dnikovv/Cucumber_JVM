Feature: Bookstore Interaction
  As a user,
  I want to interact with the homepage and bookstore functionality,
  So that I can manage my book collection effectively

  Background:
    Given The user is on the login page
    When The user enters a valid username and a valid password
    And the user clicks the "Login" button
    Then the user should be successfully logged in

  Scenario: Successful Logout
    When I click on the logout button
    Then I should see the login page

  Scenario: Access Book Store
    When I click on the Go To Book Store link
    Then I should be redirected to the bookstore page

  Scenario: Add Book to Collection
    Given I click on the Go To Book Store link
    When I select certain book
    And I click on the Add To Your Collection button
    Then I see a conformation message
    And the book is successfully added to my profile

  Scenario: Prevent Adding Duplicate Book
    Given I click on the Go To Book Store link
    When I select already added book
    And I click on the Add To Your Collection button
    Then I see a conformation message
    And I can't add the book twice

  Scenario: Search for a Book
    When I enter the book's name in the search bar
    Then I should see a list of books containing the searched keyword in their titles

  Scenario: Delete a Specific Book
    Given there is a book titled Git Pocket Guide
    When I click on the delete button
    Then I accept the action
    And I see a conformation message

  Scenario: Delete All Books
    And there are multiple books in the bookstore
    When I click on the Delete All button
    Then I accept the action
    And I see a conformation message
    And the bookstore should be empty
