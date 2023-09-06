package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.CustomWebDriver;
import utils.WebElementHelper;

public class MainPage {
    private WebElementHelper customWebElement;

    public MainPage(CustomWebDriver driver) {
        PageFactory.initElements(driver, this);
        customWebElement = new WebElementHelper(driver);
    }

    @FindBy(xpath = "//button[contains(text(), 'Log out')]")
    private WebElement logoutButton;
    @FindBy(id = "delete-record-undefined")
    private WebElement deleteSingleBookButton;
    @FindBy(id = "gotoStore")
    private WebElement gotoStoreButton;
    @FindBy(xpath = "//button[@id='submit' and @class='btn btn-primary' and contains(text(), 'Delete All Books')]")
    private WebElement deleteAllBooksButton;
    @FindBy(id = "searchBox")
    private WebElement searchField;

    @FindBy(id = "closeSmallModal-ok")
    private WebElement acceptDeleteAllBooksButton;

    @FindBy(xpath = "//button[text()='Add To Your Collection']")
    private WebElement addBookButton;
    @FindBy(id = "see-book-Git Pocket Guide")
    private WebElement book1;

    @FindBy(xpath = "//button[text()='Back To Book Store']")
    private WebElement backToBookStoreButton;

    @FindBy(xpath = "//span[text()='Profile']")
    private WebElement profileButton;

    // "//div[@class='rt-td']/img" - this is the expath for the elements, which to assert after the books are being deleted

    public void clickLogoutButton() {
        customWebElement.clickWithWait(logoutButton, 1);
    }

    public void acceptDeleteAllBooks() {
        customWebElement.clickWithWait(acceptDeleteAllBooksButton, 1);
    }

    public void clickDeleteSingleBookButton() {
        customWebElement.scrollToElement(deleteSingleBookButton);
        customWebElement.clickWithWait(deleteSingleBookButton, 1);
    }

    public void clickDeleteAllBooksButton(){
        customWebElement.scrollToElement(deleteAllBooksButton);
        customWebElement.clickWithWait(deleteAllBooksButton,1);
    }

    public void clickgotoStoreButton() {
        customWebElement.scrollToElement(gotoStoreButton);
        customWebElement.clickWithWait(gotoStoreButton, 1);
    }

    public void deleteAllBooksButton() {
        customWebElement.scrollToElement(deleteAllBooksButton);
        customWebElement.clickWithWait(deleteAllBooksButton, 1);
    }

    public void deleteSingleBook() {
        customWebElement.clickWithWait(deleteSingleBookButton, 2);
    }

    public void searchBook(String book) {
        customWebElement.typeText(searchField, book, 2);
    }

    public void selectBook1() {
        customWebElement.scrollToElement(book1);
        customWebElement.clickWithWait(book1, 1);
    }

    public void clickAddBookButton() {
        customWebElement.scrollToElement(addBookButton);
        customWebElement.clickWithWait(addBookButton, 2);
    }

    public void clickProfileButton() {
        customWebElement.scrollToElement(profileButton);
        customWebElement.clickWithWait(profileButton, 2);
    }
}
