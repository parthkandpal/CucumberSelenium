package stepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DealsStepDefinitionwithMaps {
	WebDriver driver;

	@Given("^User is navigated to login page$")
	public void user_is_navigated_to_login_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\PARTH KANDPAL\\Downloads\\chromedriver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
	}

	@When("^Title of the login page is FreeCRM$")
	public void title_of_the_login_page_is_FreeCRM() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		System.out.println("Title is " + title);
		Assert.assertEquals(title, "CRMPRO - CRM software for customer relationship management, sales, and support.");

	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)

		for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {

			driver.findElement(By.name("username")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
		}
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement button = driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()", button);
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		Assert.assertEquals(title, "CRMPRO");
	}

	@Then("^user moves to deal page$")
	public void user_moves_to_deal_page() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.switchTo().frame("mainpanel");
		Actions act = new Actions(driver);

		act.moveToElement(driver.findElement(By.xpath("//a[text()='Deals']"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();

	}

	@Then("^user inputs deal details$")
	public void user_inputs_deal_details(DataTable dealdata) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

		
		for (Map<String, String> data : dealdata.asMaps(String.class, String.class)) {

		driver.findElement(By.id("title")).sendKeys(data.get("title"));
		driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
		driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
		driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
		
		//click on save button
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
		
		//move to new deal page
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		
		// https://stackoverflow.com/questions/35199466/selenium-unknown-error-unhandled-inspector-error
		Actions act = new Actions(driver);
		act.moveToElement(driver.findElement(By.xpath("//a[text()='Deals']"))).build().perform();
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		
		}
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.quit();
	}
}
