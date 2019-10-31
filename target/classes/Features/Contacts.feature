Feature: Add new Contact
Scenario Outline: ADDING new Contacts


Given User is navigated to login page
When  Title of the login page is FreeCRM
Then  user enters "<username>" and "<password>"
Then user clicks on login button	
Then user is on home page
Then user moves to new contact page
Then user input "<firstname>" and "<lastname>" and "<position>"
Then user click on Save Button
Then verify contact has been created with "<firstname>" and "<lastname>"
Then close the browser
Examples:
	| username	| password |firstname	|lastname	|position	|
	| ronnieo	| Test123  |John		|Smith		|Contractor	|
	| parth		| Test123  |Keneddy		|robert		|Employee	|