$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "  As a user\n  I want to verify the message displayed for not valid credentials\n  So that I can understand the reason for the login failure",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User enters not valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters a not valid username \"invaliduser\" and password \"invalidpassword\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_a_not_valid_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see a message \"Invalid credentials. Please check your username and password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_should_see_a_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User enters correct username but incorrect password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters a correct username and an incorrect password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.user_enters_correct_username_and_incorrect_pass()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should stay on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_remains_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User enters incorrect username but correct password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters an incorrect username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.user_enters_incorrect_username_and_valid_pass()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should stay on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_remains_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User enters a valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/MainPage.feature");
formatter.feature({
  "name": "Bookstore Interaction",
  "description": "  As a user,\n  I want to interact with the homepage and bookstore functionality,\n  So that I can manage my book collection effectively",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Logout",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the logout button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.click_on_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_should_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Access Book Store",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the Go To Book Store link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.click_on_go_to_book_store()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be redirected to the bookstore page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_should_see_the_bookstore_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Book to Collection",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the Go To Book Store link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.click_on_go_to_book_store()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select certain book",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_select_a_book()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Add To Your Collection button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_click_add_book_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see a conformation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_see_a_conf_msg()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is successfully added to my profile",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.the_book_is_successfully_added()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Prevent Adding Duplicate Book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the Go To Book Store link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.click_on_go_to_book_store()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select already added book",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.select_already_added_book()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Add To Your Collection button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_click_add_book_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see a conformation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_see_a_conf_msg()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can\u0027t add the book twice",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.cannot_add_book_twice()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for a Book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter the book\u0027s name in the search bar",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.search_for_book()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see a list of books containing the searched keyword in their titles",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.check_the_search_results()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete a Specific Book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there is a book titled Git Pocket Guide",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.book_with_title_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the delete button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.delete_single_book()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I accept the action",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_should_see_conf_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see a conformation message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_see_a_conf_msg()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.userIsOnTheLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters a valid username and a valid password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"Login\" button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_clicks_the_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepsDefs.the_user_is_successfully_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete All Books",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "there are multiple books in the bookstore",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.there_are_multiple_books()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Delete All button",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_click_on_delete_all_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I accept the action",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_should_see_conf_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see a conformation message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.i_see_a_conf_msg()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the bookstore should be empty",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.MainPageStepsDefs.bookstore_should_be_empty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});