Feature: Create a deal
Scenario: Create a deal on FreeCRM

Given User is navigated to login page
When  Title of the login page is FreeCRM
Then  user enters username and password
| ronnieo	| Test123  |
Then user clicks on login button	
Then user is on home page
Then user moves to deal page
Then user inputs deal details
| Testdeal	| 1000	| 50	| 10|
Then close the browser