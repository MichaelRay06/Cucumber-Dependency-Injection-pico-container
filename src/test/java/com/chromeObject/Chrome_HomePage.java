package com.chromeObject;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.pageObjects.BaseClass;

public class Chrome_HomePage extends BaseClass {
	
	 @FindBy(how=How.CSS, using="h1.page-heading") public WebElement getAccountText;
	  	  
	  @FindBy(how=How.CSS, using="i.icon-heart") public WebElement myWhishList_Link;
	  

	public Chrome_HomePage(WebDriver driver) throws IOException {
		super(driver);


	}
	
	public String getAccountText() {  
		  return getAccountText.getText();
	  
	  }
	 public Chrome_DeleteSavedWishPage clickMyWishLink() throws IOException {
		 myWhishList_Link.click();
		 return new Chrome_DeleteSavedWishPage(driver);
		 
	
	}
}