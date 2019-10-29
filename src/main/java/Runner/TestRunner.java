package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\PARTH KANDPAL\\eclipse-workspace\\BDDFramework\\src\\main\\java\\Features\\login.feature",  
		glue={"stepDefinition"},			//package name for stepdefinitions 
		plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json","junit:target/junit.xml" }
		
		
		)
public class TestRunner {

}
