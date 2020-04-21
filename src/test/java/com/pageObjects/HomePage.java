package com.pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BaseClass {
	
	 //@FindBy(css="div.breadcrumb.clearfix") public WebElement myAccountImage;
	  
	  @FindBy(how=How.CSS, using="h1.page-heading") public WebElement getAccountText;
	  
	  @FindBy(how=How.NAME, using="search_query") public WebElement productSearchBox;
	  
	  @FindBy(how=How.CSS, using="button.btn.btn-default.button-search") public WebElement clickSearch;
	  

	public HomePage(WebDriver driver) throws IOException {
		super(driver);
		
	}
	
	 public String getMyAccountTitle_Text() { 
		  return getAccountText.getText();
	  
	  }
	  
	  public HomePage product_search(String searchProduct) {
	  productSearchBox.clear();
	  productSearchBox.sendKeys(searchProduct); 
	  return PageFactory.initElements(driver, HomePage.class);
	  
	  }
	  
	  public ProductSearch clickToSearch() throws IOException {
	  clickSearch.click();
	  return PageFactory.initElements(driver, ProductSearch.class);
	  
	  } }
	 
