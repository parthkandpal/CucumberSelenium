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
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "ronnieo",
        "Test123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user inputs deal details",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "Testdeal1",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "Testdeal2",
        "2000",
        "20",
        "30"
      ],
      "line": 15
    },
    {
      "cells": [
        "Testdeal3",
        "3000",
        "80",
        "70"
      ],
      "line": 16
    },
    {
      "cells": [
        "Testdeal4",
        "5000",
        "60",
        "60"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.user_is_navigated_to_login_page()"
});
formatter.result({
  "duration": 14933324457,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.title_of_the_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 42882493,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 727549148,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7688011100,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.user_is_on_home_page()"
});
formatter.result({
  "duration": 17496900,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.user_moves_to_deal_page()"
});
formatter.result({
  "duration": 890722638,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.user_inputs_deal_details(DataTable)"
});
formatter.result({
  "duration": 2743149185,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"Cannot find context with specified id\"}\n  (Session info: chrome\u003d78.0.3904.70)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027PYPARTH\u0027, ip: \u0027192.168.78.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d78.0.3904.70 (edb9c9f3de0247fd912a77b7f6cae7447f6d3ad5-refs/branch-heads/3904@{#800}), userDataDir\u003dC:\\Users\\PARTHK~1\\AppData\\Local\\Temp\\scoped_dir15524_1770258402}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:58433}, acceptInsecureCerts\u003dfalse, browserVersion\u003d78.0.3904.70, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 0d9000a093c2072f1f4ad0b52974c7f1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepDefinition.DealsStepDefinitionwithMaps.user_inputs_deal_details(DealsStepDefinitionwithMaps.java:106)\r\n\tat ✽.Then user inputs deal details(C:/Users/PARTH KANDPAL/eclipse-workspace/BDDFramework/src/main/java/Features/deals.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DealsStepDefinitionwithMaps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});