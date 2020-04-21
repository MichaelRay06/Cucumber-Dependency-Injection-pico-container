package com.MultiObject;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.pageObjects.BaseClass;
import com.pageObjects.HomePage;
import com.pageObjects.ProductSearch;

public class Multi_HomePage extends BaseClass {
	
	 @FindBy(how=How.CSS, using="h1.page-heading") public WebElement getAccountText;
	  
	  @FindBy(how=How.NAME, using="search_query") public WebElement productSearchBox;
	  
	  @FindBy(how=How.CSS, using="button.btn.btn-default.button-search") public WebElement clickSearch;
	  

	public Multi_HomePage(WebDriver driver) throws IOException {
		super(driver);
		PageFactory.initElements(driver, this);
		
	}
	
	 public String getMyAccountTitle_Text() { 
		  return getAccountText.getText();
	  
	  }
	  
	  public Multi_HomePage product_search(String searchProduct) throws IOException {
	  productSearchBox.clear();
	  productSearchBox.sendKeys(searchProduct); 
	  return new Multi_HomePage(driver);
	  
	  }
	  
	  public Multi_SearchProductPage clickToSearch() throws IOException {
	  clickSearch.click();
	  return new Multi_SearchProductPage(driver);
	  
	  } 
	 


}
