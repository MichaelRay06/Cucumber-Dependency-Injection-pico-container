package com.MultiObject;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.pageObjects.BaseClass;
import com.pageObjects.HomePage;
import com.pageObjects.LoginPage;

public class Muiti_LoggingPage extends BaseClass {
	
	@FindBy(how=How.ID, using="email") public WebElement SET_USER_NAME;
	@FindBy(how=How.ID, using="passwd") public WebElement SET_PASSWORD;
	@FindBy(how=How.ID, using= "SubmitLogin")public WebElement SIGN_IN_BUTTON;
	
	
	public Muiti_LoggingPage(WebDriver driver) throws IOException {
		super(driver);
		PageFactory.initElements(driver, this);
		
	}
	
	public LoginPage populateLoginBox(String userName, String Password) throws IOException {
		SET_USER_NAME.sendKeys(userName);
		SET_PASSWORD.sendKeys(Password);
		return new LoginPage(driver);
	}
		
		public HomePage clickLSingInButton() throws IOException {
			SIGN_IN_BUTTON.click();
			return new HomePage(driver);
			
		
		
	}

}



