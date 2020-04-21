package com.pageObjects;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BaseClass {
	
	@FindBy(how=How.ID, using="email") public WebElement SET_USER_NAME;
	@FindBy(how=How.ID, using="passwd") public WebElement SET_PASSWORD;
	@FindBy(how=How.ID, using= "SubmitLogin")public WebElement SIGN_IN_BUTTON;
	
	
	public LoginPage(WebDriver driver) throws IOException {
		super(driver);
		PageFactory.initElements(driver, this);
		
	}
	
	public LoginPage populateLoginBox(String userName, String Password) {
		SET_USER_NAME.sendKeys(userName);
		SET_PASSWORD.sendKeys(Password);
		return PageFactory.initElements(driver, LoginPage.class );
	}
		
		public HomePage clickLSingInButton() {
			SIGN_IN_BUTTON.click();
			return PageFactory.initElements(driver, HomePage.class );
			
		
		
	}

}



