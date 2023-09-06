package stepdefs;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.MainPage;
import utils.CustomWebDriver;

import java.util.List;

import static org.junit.Assert.assertTrue;

public class MainPageStepsDefs {
    private static CustomWebDriver driver;

    private static MainPage mainPage;

    public static void initialize(CustomWebDriver customDriver, MainPage customMainPage) {
        driver = customDriver;
        mainPage = customMainPage;
    }

    public MainPageStepsDefs() {
    }

    @When("I click on the logout button")
    public void click_on_the_logout_button() {
        mainPage.clickLogoutButton();
    }

    @Then("I should see the login page")
    public void i_should_see_the_login_page() {
        driver.slowdownBetweenSteps(2);
        String currentUrl = driver.getCurrentUrl();
        System.out.println("Current URL: " + currentUrl);
        assertTrue(currentUrl.contains("login"));
    }

    @When("I click on the Go To Book Store link")
    public void click_on_go_to_book_store() {
        mainPage.clickgotoStoreButton();
    }

    @Then("I should be redirected to the bookstore page")
    public void i_should_see_the_bookstore_page() {
        driver.slowdownBetweenSteps(2);
        String currentUrl = driver.getCurrentUrl();
        System.out.println("Current URL: " + currentUrl);
        assertTrue(currentUrl.contains("books"));
    }

    @Given("I select certain book")
    public void i_select_a_book() {
        mainPage.selectBook1();
    }

    @And("I click on the Add To Your Collection button")
    public void i_click_add_book_button() {
        mainPage.clickAddBookButton();
    }

    @And("I see a conformation message")
    public void i_see_a_conf_msg() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.alertIsPresent());
        Alert alert = driver.switchTo().alert();
        String alertText = alert.getText();
        System.out.println("Alert Text: " + alertText);
        alert.accept();
        driver.slowdownBetweenSteps(2);
    }

    @And("the book is successfully added to my profile")
    public void the_book_is_successfully_added() {
        mainPage.clickProfileButton();
        WebElement booksTitle = driver.findElement(By.id("see-book-Git Pocket Guide"));
        Assert.assertNotNull(String.valueOf(booksTitle), "Book not found");
        driver.slowdownBetweenSteps(2);
    }

    @When("I select already added book")
    public void select_already_added_book() {
        mainPage.selectBook1();
    }

    @And("I can't add the book twice")
    public void cannot_add_book_twice() {
        mainPage.clickProfileButton();
        driver.slowdownBetweenSteps(1);
        List<WebElement> matchingElements = (List<WebElement>) driver.findElements(By.id("see-book-Git Pocket Guide"));
        Assert.assertEquals(matchingElements.size(), 1);
    }

    @When("I enter the book's name in the search bar")
    public void search_for_book() {
        mainPage.searchBook("Git");
        driver.slowdownBetweenSteps(2);
    }

    @Then("I should see a list of books containing the searched keyword in their titles")
    public void check_the_search_results() {
        WebElement booksTitle = driver.findElement(By.id("see-book-Git Pocket Guide"));
        Assert.assertNotNull(String.valueOf(booksTitle), "Book not found");
    }

    @Given("there is a book titled Git Pocket Guide")
    public void book_with_title_is_present() {
        WebElement booksTitle = driver.findElement(By.id("see-book-Git Pocket Guide"));
        Assert.assertNotNull(String.valueOf(booksTitle), "Book not found");
    }

    @When("I click on the delete button")
    public void delete_single_book() {
        mainPage.deleteSingleBook();
    }

    @Then("I accept the action")
    public void i_should_see_conf_message() {
        driver.slowdownBetweenSteps(1);
        mainPage.acceptDeleteAllBooks();
    }

    @And("there are multiple books in the bookstore")
    public void there_are_multiple_books() {
        WebElement divElement = driver.findElement(By.className("rt-td"));
        List<WebElement> imgElements = divElement.findElements(By.tagName("img"));
        Assert.assertFalse("No books found", imgElements.isEmpty());
    }

    @When("I click on the Delete All button")
    public void i_click_on_delete_all_button() {
        mainPage.clickDeleteAllBooksButton();
    }

    @And("the bookstore should be empty")
    public void bookstore_should_be_empty() {
        driver.slowdownBetweenSteps(2);
        WebElement divElement = driver.findElement(By.className("rt-td"));
        List<WebElement> imgElements = divElement.findElements(By.tagName("img"));
        Assert.assertTrue("There are books in the profile", imgElements.isEmpty());
    }
}