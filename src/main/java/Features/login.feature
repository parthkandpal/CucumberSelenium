Feature: Login to the application
Scenario Outline: Validate the login functionality


Given User is navigated to login page
When  Title of the login page is FreeCRM
Then  user enters "<username>" and "<password>"
Then user clicks on login button	
Then user is on home page
Then close the browser

Examples:
	| username	| password |
	| ronnieo	| Test123  |
	| parth		| Test123  |

#Scenario: User is able to create Contact
#Given User is navigated to Home page
#When User mouse hover on contacts list
#Then User click on New Contact List
#Then User enters first Name and last Name
#Then User click on save button
#Then verify new contact has been created

