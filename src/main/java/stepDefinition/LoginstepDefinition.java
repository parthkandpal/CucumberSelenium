package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginstepDefinition{
	
	WebDriver driver;
	@Given("^User is navigated to login page$")
	public void User_is_navigated_to_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\PARTH KANDPAL\\Downloads\\chromedriver\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
	}
	
	@When("^Title of the login page is FreeCRM$")
	public void Title_of_the_login_page_is_FreeCRM() {
		
		String title= driver.getTitle();
		System.out.println("Title is "+ title);
		Assert.assertEquals(title, "CRMPRO - CRM software for customer relationship management, sales, and support.");
	}
	
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username(String username, String password) throws Throwable {
	   driver.findElement(By.name("username")).sendKeys(username);
	   driver.findElement(By.name("password")).sendKeys(password);

	}


	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		WebElement button=driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", button);
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
	    String title=driver.getTitle();
	    Assert.assertEquals(title, "CRMPRO");
	    

	}
	
	
	@Then("^close the browser$")
	public void close_the_driver() {
		driver.quit();
	}


}
