$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/PARTH KANDPAL/eclipse-workspace/BDDFramework/src/main/java/Features/Contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Add new Contact",
  "description": "",
  "id": "add-new-contact",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "ADDING new Contacts",
  "description": "",
  "id": "add-new-contact;adding-new-contacts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is navigated to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user input \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on Save Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify contact has been created with \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "add-new-contact;adding-new-contacts;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "add-new-contact;adding-new-contacts;;1"
    },
    {
      "cells": [
        "ronnieo",
        "Test123",
        "John",
        "Smith",
        "Contractor"
      ],
      "line": 17,
      "id": "add-new-contact;adding-new-contacts;;2"
    },
    {
      "cells": [
        "parth",
        "Test123",
        "Keneddy",
        "robert",
        "Employee"
      ],
      "line": 18,
      "id": "add-new-contact;adding-new-contacts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "ADDING new Contacts",
  "description": "",
  "id": "add-new-contact;adding-new-contacts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is navigated to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ronnieo\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user input \"John\" and \"Smith\" and \"Contractor\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on Save Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify contact has been created with \"John\" and \"Smith\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddContactStepDefinition.User_is_navigated_to_login_page()"
});
formatter.result({
  "duration": 12171642037,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.Title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 23189034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ronnieo",
      "offset": 13
    },
    {
      "val": "Test123",
      "offset": 27
    }
  ],
  "location": "AddContactStepDefinition.user_enters_username(String,String)"
});
formatter.result({
  "duration": 445044918,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7567809034,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 13613726,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 426003282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 12
    },
    {
      "val": "Smith",
      "offset": 23
    },
    {
      "val": "Contractor",
      "offset": 35
    }
  ],
  "location": "AddContactStepDefinition.user_input_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 2290037711,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_click_on_Save_Button()"
});
formatter.result({
  "duration": 133366507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 38
    },
    {
      "val": "Smith",
      "offset": 49
    }
  ],
  "location": "AddContactStepDefinition.verify_contact_has_been_created_with_firstname_and_lastname(String,String)"
});
formatter.result({
  "duration": 1918929881,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.close_the_driver()"
});
formatter.result({
  "duration": 842099175,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "ADDING new Contacts",
  "description": "",
  "id": "add-new-contact;adding-new-contacts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is navigated to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"parth\" and \"Test123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user input \"Keneddy\" and \"robert\" and \"Employee\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user click on Save Button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify contact has been created with \"Keneddy\" and \"robert\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddContactStepDefinition.User_is_navigated_to_login_page()"
});
formatter.result({
  "duration": 9937800850,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.Title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 11833553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "parth",
      "offset": 13
    },
    {
      "val": "Test123",
      "offset": 25
    }
  ],
  "location": "AddContactStepDefinition.user_enters_username(String,String)"
});
formatter.result({
  "duration": 459579318,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 19455127084,
  "status": "passed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 11673682,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e but was:\u003cCRMPRO[]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.AddContactStepDefinition.user_is_on_home_page(AddContactStepDefinition.java:56)\r\n\tat ✽.Then user is on home page(C:/Users/PARTH KANDPAL/eclipse-workspace/BDDFramework/src/main/java/Features/Contacts.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddContactStepDefinition.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keneddy",
      "offset": 12
    },
    {
      "val": "robert",
      "offset": 26
    },
    {
      "val": "Employee",
      "offset": 39
    }
  ],
  "location": "AddContactStepDefinition.user_input_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddContactStepDefinition.user_click_on_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Keneddy",
      "offset": 38
    },
    {
      "val": "robert",
      "offset": 52
    }
  ],
  "location": "AddContactStepDefinition.verify_contact_has_been_created_with_firstname_and_lastname(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddContactStepDefinition.close_the_driver()"
});
formatter.result({
  "status": "skipped"
});
});