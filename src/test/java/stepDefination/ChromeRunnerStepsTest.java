package stepDefination;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.chromeObject.Chrome_DeleteSavedWishPage;
import com.chromeObject.Chrome_HomePage;
import com.chromeObject.Chrome_LoggingPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uties.DriverFactoryTest;

public class ChromeRunnerStepsTest {
	
	protected WebDriver driver;
	
	protected DriverFactoryTest DriverFactoryTest;
	
	public static Chrome_LoggingPage chrome_LoggingPage;
	public static Chrome_HomePage chrome_HomePage;
	public static Chrome_DeleteSavedWishPage chrome_DeleteSavedWishPage;
	
	
	public ChromeRunnerStepsTest(DriverFactoryTest DriverFactoryTest) {
		
		this.DriverFactoryTest=DriverFactoryTest;
	}
	
	@Given("^I am on Carguruji web site on \"([^\"]*)\"$")
	public void i_am_on_Carguruji_web_site_on(String browserName) throws Throwable {
		driver=DriverFactoryTest.luncBrowser(browserName);
		driver.get("http://carguruji.com/shop/login?back=my-account");
	    
	}

	@When("^I logged into the site with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_logged_into_the_site_with_and(String userName, String Password) throws Throwable {
		chrome_LoggingPage= PageFactory.initElements(driver, Chrome_LoggingPage.class);
		
		
		chrome_LoggingPage.populateLoginBox(userName, Password);
		chrome_LoggingPage.clickLSingInButton();
	   
	}

	@Then("^I verify my account title text for \"([^\"]*)\"$")
	public void i_verify_my_account_title_text_for(String accountTitle) throws Throwable {
		chrome_HomePage= PageFactory.initElements(driver, Chrome_HomePage.class);
		String actualTextTitle= chrome_HomePage.getAccountText();
	   
	}

	@Then("^I click  whish list link$")
	public void i_click_whish_list_link() throws Throwable {
		chrome_HomePage= PageFactory.initElements(driver, Chrome_HomePage.class);

		chrome_HomePage.clickMyWishLink();
	   
	}

	@And("^I named the whish item$")
	public void i_named_the_whish_item() throws Throwable {
		chrome_DeleteSavedWishPage=PageFactory.initElements(driver, Chrome_DeleteSavedWishPage.class);
		chrome_DeleteSavedWishPage.nameMySelectedItem();
	   
	}

	@And("^I clicked to  save button$")
	public void i_clicked_to_save_button() throws Throwable {
		chrome_DeleteSavedWishPage=PageFactory.initElements(driver, Chrome_DeleteSavedWishPage.class);

		chrome_DeleteSavedWishPage.savedItem();
	   
	}

	@Then("^I deleted the saved  item$")
	public void i_deleted_the_saved_item() throws Throwable {
		chrome_DeleteSavedWishPage=PageFactory.initElements(driver, Chrome_DeleteSavedWishPage.class);

		chrome_DeleteSavedWishPage.savedItemDeleted();
	   
	}



}
