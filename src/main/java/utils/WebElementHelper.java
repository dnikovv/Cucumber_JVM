package utils;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WebElementHelper {
    private WebDriverWait wait;
    private WebDriver driver;

    public WebElementHelper(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, 10);
    }

    public void waitForVisibility(WebElement element, int timeoutInSeconds) {
        wait.until(ExpectedConditions.visibilityOf(element));
    }

    public void clickWithWait(WebElement element, int timeoutInSeconds) {
        waitForVisibility(element, timeoutInSeconds);
        element.click();
    }

    public String getTextWithWait(WebElement element, int timeoutInSeconds) {
        waitForVisibility(element, timeoutInSeconds);
        return element.getText();
    }

    public void typeText(WebElement element, String text, int timeoutInSeconds) {
        waitForVisibility(element, timeoutInSeconds);
        element.clear();
        element.sendKeys(text);
    }

    public void scrollToElement(WebElement element) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    public void waitForValueToBe(WebElement element, String expectedValue, int timeoutInSeconds) {
        wait.until(ExpectedConditions.attributeToBe(element, "value", expectedValue));
    }

    public String getAttributeWithWait(WebElement element, String attributeName, int timeoutInSeconds) {
        waitForVisibility(element, timeoutInSeconds);
        return element.getAttribute(attributeName);
    }

    public void waitForInvisibility(WebElement element, int timeoutInSeconds) {
        wait.until(ExpectedConditions.invisibilityOf(element));
    }

    public void waitForClickable(WebElement element, int timeoutInSeconds) {
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }
}
