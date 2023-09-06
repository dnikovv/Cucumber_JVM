package utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class CustomExpectedCondition implements ExpectedCondition<WebElement> {
    private final By by;

    public CustomExpectedCondition(By by) {
        this.by = by;
    }

    @Override
    public WebElement apply(WebDriver driver) {
        WebElement element = ExpectedConditions.presenceOfElementLocated(by).apply(driver);
        if (element != null && element.isDisplayed()) {
            return element;
        }
        return null;
    }
}
