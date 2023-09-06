package stepdefs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.LoginPage;
import utils.CustomWebDriver;

import static org.junit.Assert.assertTrue;


public class LoginStepsDefs {

    private static CustomWebDriver driver;
    String linksUrl = "https://demoqa.com/login";
    private static LoginPage loginPage;

    public LoginStepsDefs() {
    }

    public static void initialize(CustomWebDriver customDriver, LoginPage customLoginPage) {
        driver = customDriver;
        loginPage = customLoginPage;
    }

    @Given("^The user is on the login page$")
    public void userIsOnTheLoginPage() {
        driver.get(linksUrl);
    }

    @When("the user enters a not valid username {string} and password {string}")
    public void the_user_enters_a_not_valid_username_and_password(String string, String string2) {
        loginPage.setUserName("Tester9921");
        loginPage.setPassword("blabla");
    }

    @When("The user enters a valid username and a valid password")
    public void the_user_enters_valid_username_and_password() {
        loginPage.setUserName("Tester990");
        loginPage.setPassword("Pass123_!");
    }

    @When("the user clicks the {string} button")
    public void the_user_clicks_the_button(String string) {
        loginPage.clickLoginButton();
    }

    @When("the user enters a correct username and an incorrect password")
    public void user_enters_correct_username_and_incorrect_pass() {
        loginPage.setUserName("Tester990");
        loginPage.setPassword("Pass");
    }

    @When("the user enters an incorrect username and a valid password")
    public void user_enters_incorrect_username_and_valid_pass() {
        loginPage.setUserName("Testerr");
        loginPage.setPassword("Pass");
    }

    @Then("the user should see a message {string}")
    public void the_user_should_see_a_message(String string) {
        String actualErrorMessage = loginPage.getLoginErrorMessageText();
        String expectedErrorMessage = "Invalid username or password!";
        Assert.assertEquals(expectedErrorMessage, actualErrorMessage);
        driver.slowdownBetweenSteps(1);
    }

    @Then("the user should be successfully logged in")
    public void the_user_is_successfully_logged_in() {
        driver.slowdownBetweenSteps(2);
        String currentUrl = driver.getCurrentUrl();
        System.out.println("Current URL: " + currentUrl);
        assertTrue(currentUrl.contains("profile"));
    }

    @Then("the user should stay on the login page")
    public void the_user_remains_on_login_page() {
        String actualErrorMessage = loginPage.getLoginErrorMessageText();
        String expectedErrorMessage = "Invalid username or password!";
        Assert.assertEquals(expectedErrorMessage, actualErrorMessage);
    }

    @Given("I am logged in")
    public void logged_in() {
        driver.get("https://demoqa.com/login");
        loginPage.setUserName("Tester990");
        loginPage.setPassword("Pass123_!");
        loginPage.clickLoginButton();
    }
}
