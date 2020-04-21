
package stepDefination;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.MultiObject.Muiti_LoggingPage;
import com.MultiObject.Multi_HomePage;
import com.MultiObject.Multi_SearchProductPage;
import com.pageObjects.HomePage;
import com.pageObjects.LoginPage;
import com.pageObjects.ProductSearch;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uties.DriverFactoryTest;

public class MultiBrowserStepTest {

	public DriverFactoryTest driverFactoryTest;

	WebDriver driver;

	public static Muiti_LoggingPage multi_loginPage;
	public static Multi_HomePage multi_homePage;
	public static Multi_SearchProductPage multi_productSearch;

	public MultiBrowserStepTest(DriverFactoryTest driverFactoryTest) {
		this.driverFactoryTest = driverFactoryTest;

	}

	@Given("^I am on Carguruji site on \"([^\"]*)\"$")
	public void i_am_on_Carguruji_site_on(String browserName) throws Throwable {

		driver = driverFactoryTest.luncBrowser(browserName);
		driver.get("http://carguruji.com/shop/login?back=my-account");

	}

	@When("^I logged in the site with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_logged_in_the_site_with_and(String userName, String Password) throws Throwable {
		 Muiti_LoggingPage multi_loginPage= new  Muiti_LoggingPage(driver);
		
		 multi_loginPage.populateLoginBox(userName, Password);
		 multi_loginPage.clickLSingInButton();

	}

	@Then("^I verify my account title text as \"([^\"]*)\"$")
	public void i_verify_my_account_title_text_as(String myAccountTitleText) throws Throwable {
		Multi_HomePage multi_homePage= new Multi_HomePage (driver);
		
		String actualAccountTitle = multi_homePage.getMyAccountTitle_Text();
	}

	@And("^I search for desired product as \"([^\"]*)\"$")
	public void i_search_for_desired_product_as(String searchProduct) throws Throwable {
		Multi_HomePage multi_homePage= new Multi_HomePage (driver);
		
		multi_homePage.product_search(searchProduct);
		multi_homePage.clickToSearch();

	}

	@Then("^I verifyed the serched product  \"([^\"]*)\"$")
	public void i_verifyed_the_serched_product_as(String verifyProduct) throws Throwable {
		Multi_SearchProductPage multi_productSearch= new Multi_SearchProductPage(driver);
		
		multi_productSearch.verifySearchProduct();

	}

	@Then("^I click on whish list link$")
	public void i_click_on_whish_list_link() throws Throwable {

	}

	@Then("^I named my whish item$")
	public void i_named_my_whish_item() throws Throwable {

	}

	@Then("^I clicked on save button$")
	public void i_clicked_on_save_button() throws Throwable {

	}

	@Then("^I verified my saved list item$")
	public void i_verified_my_saved_list_item() throws Throwable {

	}

	@Then("^I deleted the saved list item$")
	public void i_deleted_the_saved_list_item() throws Throwable {

	}
}
