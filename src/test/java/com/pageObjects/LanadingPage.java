package com.pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LanadingPage extends BaseClass{
	@FindBy(how=How.CSS,using="a.login") public WebElement SING_IN_BUTTON;

	public LanadingPage(WebDriver driver) throws IOException {
		super(driver);
		PageFactory.initElements(driver, this);
		
	}
	
	public String getPageTitle() {
		return  driver.getTitle();
		
		
	}
	
	public LoginPage singInSite() {
		SING_IN_BUTTON.click();
		return PageFactory.initElements(driver, LoginPage.class);
		
		
	}

}
