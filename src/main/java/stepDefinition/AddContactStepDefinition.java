package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddContactStepDefinition {

	WebDriver driver;
	@Given("^User is navigated to Home page$")
	public void user_is_navigated_to_Home_page() throws Throwable {

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\PARTH KANDPAL\\Downloads\\chromedriver\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.get("https://classic.crmpro.com/index.html");
		driver.findElement(By.name("username")).sendKeys("ronnieo");
		driver.findElement(By.name("password")).sendKeys("test123");
		WebElement button=driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click()", button);
	}

	@When("^User mouse hover on contacts list$")
	public void user_mouse_hover_on_contacts_list() throws Throwable {
		
	}

	@Then("^User click on New Contact List$")
	public void user_click_on_New_Contact_List() throws Throwable {
	
	}

	@Then("^User enters first Name and last Name$")
	public void user_enters_first_Name_and_last_Name() throws Throwable {

	    
	}

	@Then("^User click n save button$")
	public void user_click_n_save_button() throws Throwable {
	    //
	    
	}

	@Then("^verify new contact has been created$")
	public void verify_new_contact_has_been_created() throws Throwable {
	    //
	    
	}
	
}
