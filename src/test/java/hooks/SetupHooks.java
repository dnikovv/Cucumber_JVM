package hooks;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.picocontainer.PicoContainer;
import pages.MainPage;
import pages.LoginPage;
import stepdefs.MainPageStepsDefs;
import stepdefs.LoginStepsDefs;
import utils.CustomWebDriver;

public class SetupHooks {
    private CustomWebDriver driver;
    private PicoContainer container;

    @Before
    public void setup() {

        container = DependencyInjector.configure();
        driver = container.getComponent(CustomWebDriver.class);
        driver.start(CustomWebDriver.Browser.EDGE);

        LoginPage loginPage = container.getComponent(LoginPage.class);
        MainPage mainPage = container.getComponent(MainPage.class);

        LoginStepsDefs.initialize(driver, loginPage);
        MainPageStepsDefs.initialize(driver, mainPage);
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
