package uties;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import io.github.bonigarcia.wdm.WebDriverManager;

public class DriverFactoryTest {
	
	public WebDriver driver=null;

	 DesiredCapabilities capabilities ;


public WebDriver luncBrowser(String browserName) {
	//public WebDriver luncBrowser() {
	
	
		if((browserName).equalsIgnoreCase("chrome")){
			WebDriverManager.chromedriver().setup();
			
			if(driver==null)
			driver=new ChromeDriver();
			
			
		}
		else if((browserName).equalsIgnoreCase("IE")){
		
			WebDriverManager.iedriver().setup();
		    if(driver==null)
		driver = new InternetExplorerDriver(capabilities);
		
		
			
		}
		else if((browserName).equalsIgnoreCase("firefox")){
		WebDriverManager.firefoxdriver().setup();
		if(driver==null)
		driver = new FirefoxDriver();{
		}
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
		
			
		}
		return driver;
	



}
}
