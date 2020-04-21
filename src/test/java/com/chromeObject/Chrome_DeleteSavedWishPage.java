package com.chromeObject;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import com.pageObjects.BaseClass;

public class Chrome_DeleteSavedWishPage extends BaseClass{
	
	@FindBy(how=How.ID,using="name") public WebElement named_MyWishList_item;
	@FindBy(how=How.CSS,using="button#submitWishlist >span") public WebElement saved_MyWishedItem;
	@FindBy(how=How.CSS, using="i.icon-remove")public WebElement deleteSavedItem;

	public Chrome_DeleteSavedWishPage(WebDriver driver) throws IOException {
		super(driver);
	
	}
	public void nameMySelectedItem() {
		named_MyWishList_item.sendKeys("blouse");
		
	}
	public void savedItem() {
		saved_MyWishedItem.click();
		
	}
	public void savedItemDeleted() {
		deleteSavedItem.click();
		driver.switchTo().alert().accept();
		driver.switchTo().defaultContent();
		
	}
}
	