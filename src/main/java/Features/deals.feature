Feature: Create a deal
Scenario: Create a deal on FreeCRM

Given User is navigated to login page
When  Title of the login page is FreeCRM
Then  user enters username and password
| username|	password   |
| ronnieo | Test123  |
Then user clicks on login button	
Then user is on home page
Then user moves to deal page
Then user inputs deal details
	| title		| amount | probability | commission |
	| Testdeal1	| 1000	| 50	| 10|
	| Testdeal2	| 2000	| 20	| 30|
	| Testdeal3	| 3000	| 80	| 70|
	| Testdeal4	| 5000	| 60	| 60|
	
Then close the browser