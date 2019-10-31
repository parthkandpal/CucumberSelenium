$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/PARTH KANDPAL/eclipse-workspace/BDDFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Create a deal",
  "description": "",
  "id": "create-a-deal",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Create a deal on FreeCRM",
  "description": "",
  "id": "create-a-deal;create-a-deal-on-freecrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is navigated to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "ronnieo",
        "Test123"
      ],
      "line": 7
    }
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
  "name": "user moves to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user inputs deal details",
  "rows": [
    {
      "cells": [
        "Testdeal",
        "1000",
        "50",
        "10"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepdefinition.user_is_navigated_to_login_page()"
});
formatter.result({
  "duration": 15082082808,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 22423092,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 404662276,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 11130342834,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 14720488,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.user_moves_to_deal_page()"
});
formatter.result({
  "duration": 402264722,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.user_inputs_deal_details(DataTable)"
});
formatter.result({
  "duration": 1987786046,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 1188423885,
  "status": "passed"
});
});