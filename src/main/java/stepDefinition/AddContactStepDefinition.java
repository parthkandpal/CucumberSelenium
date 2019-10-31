//package stepDefinition;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//import org.openqa.selenium.support.ui.ExpectedCondition;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class AddContactStepDefinition {
//
//	WebDriver driver;
//	@Given("^User is navigated to login page$")
//	public void User_is_navigated_to_login_page() {
//		System.setProperty("webdriver.chrome.driver", "C:\\Users\\PARTH KANDPAL\\Downloads\\chromedriver\\chromedriver.exe");
//		driver= new ChromeDriver();
//		driver.get("https://classic.crmpro.com/index.html");
//	}
//	
//	@When("^Title of the login page is FreeCRM$")
//	public void Title_of_the_login_page_is_FreeCRM() {
//		
//		String title= driver.getTitle();
//		System.out.println("Title is "+ title);
//		Assert.assertEquals(title, "CRMPRO - CRM software for customer relationship management, sales, and support.");
//	}
//	
//	@Then("^user enters \"(.*)\" and \"(.*)\"$")
//	public void user_enters_username(String username, String password) throws Throwable {
//	   driver.findElement(By.name("username")).sendKeys(username);
//	   driver.findElement(By.name("password")).sendKeys(password);
//
//	}
//
//
//	@Then("^user clicks on login button$")
//	public void user_clicks_on_login_button() throws Throwable {
//		WebElement button=driver.findElement(By.xpath("//input[@type='submit']"));
//		JavascriptExecutor js = (JavascriptExecutor)driver;
//		js.executeScript("arguments[0].click()", button);
//	}
//
//	@Then("^user is on home page$")
//	public void user_is_on_home_page() throws Throwable {
//	    String title=driver.getTitle();
//	    Assert.assertEquals(title, "CRMPRO");
//	    
//
//	}
//	
//	
//
//@Then("^user moves to new contact page$")
//public void user_moves_to_new_contact_page() throws Throwable {
//    // Write code here that turns the phrase above into concrete actions
//	driver.switchTo().frame("mainpanel");
//	Actions act = new Actions(driver);
//	
////	WebDriverWait wait = new WebDriverWait(driver,40);
//	
////	WebElement Contacts=wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[text()='Contacts']")));
//	
//	act.moveToElement(driver.findElement(By.xpath("//a[text()='Contacts']"))).build().perform();
//	driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//}
//
//@Then("^user input \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
//public void user_input_firstname_and_lastname_and_position(String firstname, String lastname, String position) throws Throwable {
//    // Write code here that turns the phrase above into concrete actions
//	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
//	driver.findElement(By.id("first_name")).sendKeys(firstname);
//	
//	driver.findElement(By.id("surname")).sendKeys(lastname);
//	driver.findElement(By.id("company_position")).sendKeys(position);
//}
//
//@Then("^user click on Save Button$")
//public void user_click_on_Save_Button() throws Throwable {
//    // Write code here that turns the phrase above into concrete actions
//	driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//
//   
//}
//
//@Then("^verify contact has been created with \"([^\"]*)\" and \"([^\"]*)\"$")
//public void verify_contact_has_been_created_with_firstname_and_lastname(String firstname , String lastname) throws Throwable {
//    //
//    String Contactname=driver.findElement(By.xpath("//td[@class='tabs_header'][1]")).getText();
//    Assert.assertEquals(Contactname, firstname+" "+lastname);
//     
//}
//	
//	@Then("^close the browser$")
//	public void close_the_driver() {
//		driver.quit();
//	}	
//}
