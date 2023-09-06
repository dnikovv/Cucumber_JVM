package hooks;

import org.picocontainer.DefaultPicoContainer;
import org.picocontainer.MutablePicoContainer;
import pages.MainPage;
import pages.LoginPage;
import utils.CustomWebDriver;

public class DependencyInjector {

    public static MutablePicoContainer configure() {

        MutablePicoContainer container = new DefaultPicoContainer();
        container.addComponent(CustomWebDriver.class);
        container.addComponent(LoginPage.class);
        container.addComponent(MainPage.class);

        return container;
    }

}
