Feature: Login to the application
Scenario: Validate the login functionality


Given User is navigated to login page
When  Title of the login page is FreeCRM
Then  user enters username 
Then  user enters Password
Then user clicks on login button	
Then user is on home page

Scenario: User is able to create Contact
Given User is navigated to Home page
When User mouse hover on contacts list
Then User click on New Contact List
Then User enters first Name and last Name
Then User click n save button
Then verify new contact has been created

