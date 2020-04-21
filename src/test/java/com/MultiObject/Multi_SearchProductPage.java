package com.MultiObject;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.pageObjects.BaseClass;

public class Multi_SearchProductPage extends BaseClass {
	@FindBy(css="span.lighter") public WebElement searchProduct;

	public Multi_SearchProductPage(WebDriver driver) throws IOException {
		super(driver);
		
	}
	 
	 public String verifySearchProduct() {
		return searchProduct.getText();
		
	 }
	
	  
	  
	  }
	 