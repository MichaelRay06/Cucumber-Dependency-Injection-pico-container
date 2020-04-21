package com.pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductSearch extends BaseClass {
	
	@FindBy(css="span.lighter") public WebElement searchProduct;
	  
	  
	  
	 public ProductSearch(WebDriver driver) throws IOException {
		super(driver);
   PageFactory.initElements(driver, this);
	}
	 
	 public String verifySearchProduct() {
		return searchProduct.getText();
		
	 }
	
	  
	  
	  }
	 