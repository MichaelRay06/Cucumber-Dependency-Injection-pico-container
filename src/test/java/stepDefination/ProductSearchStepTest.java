package stepDefination;






import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.pageObjects.HomePage;
import com.pageObjects.LanadingPage;
import com.pageObjects.LoginPage;
import com.pageObjects.ProductSearch;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uties.DriverFactoryTest;

public class ProductSearchStepTest {
	
	public DriverFactoryTest driverFactoryTest;
	WebDriver driver;


	public static LanadingPage landingPage;
	public static  LoginPage loginPage;
	public static  HomePage homePage;
	public static ProductSearch productSearch;
	
	public ProductSearchStepTest(DriverFactoryTest driverFactoryTest){
    this.driverFactoryTest=driverFactoryTest;
		
 
		
   
		
	}
	
	@Given("^I am on Carguruji on \"([^\"]*)\" browser$")
	public void i_am_on_Carguruji_on_browser(String browserName) throws Throwable {
		driver=driverFactoryTest.luncBrowser(browserName);
		driver.get("http://carguruji.com/shop/");
	  
	}

	@Then("^I coud vrify the page tile as \"([^\"]*)\"$")
	public void i_coud_vrify_the_page_tile_as(String pageTitle) throws Throwable {
		landingPage= PageFactory.initElements(driver, LanadingPage.class);
		String actualTitle =landingPage.getPageTitle();
		//Assert.assertEquals(actualTitle, pageTitle );
		
		landingPage.singInSite();
		
		
	   
	}

	@When("^I logged in the site with user name as \"([^\"]*)\" password as \"([^\"]*)\"$")
	public void i_logged_in_the_site_with_user_name_as_password_as(String userName, String Password) throws Throwable {
		LoginPage loginPage= PageFactory.initElements(driver, LoginPage.class);
		loginPage.populateLoginBox(userName, Password);
		loginPage.clickLSingInButton();
	   
	}

	@Then("^I verify my  account title text as \"([^\"]*)\"$")
	public void i_verify_my_account_title_text_as(String myAccountTitleText) throws Throwable {
		
		HomePage homePage= PageFactory.initElements(driver, HomePage.class);
		 String actualAccountTitle =homePage.getMyAccountTitle_Text();
		// Assert.assertEquals(actualAccountTitle, myAccountTitleText );
	}

	@And("^I search for desired product as  \"([^\"]*)\"$")
	public void i_search_for_desired_product_as(String searchProduct) throws Throwable {
		HomePage homePage= PageFactory.initElements(driver, HomePage.class);
		homePage.product_search(searchProduct);
		
	   
	}

	@Then("^I click to make product search$")
	public void i_click_to_make_product_search() throws Throwable {
		HomePage homePage= PageFactory.initElements(driver, HomePage.class);
		homePage.clickToSearch();
	    
	}

	@Then("^I verifyed the serched product as \"([^\"]*)\"$")
	public void i_verifyed_the_serched_product_as(String vrifyProduct) throws Throwable {
		ProductSearch productSearch =PageFactory.initElements(driver, ProductSearch.class);
		String actualSearchProduct= productSearch.verifySearchProduct();
		// Assert.assertEquals(actualSearchProduct, vrifyProduct );
	    
	}


}



