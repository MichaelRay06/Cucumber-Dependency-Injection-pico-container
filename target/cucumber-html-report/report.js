$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mutipleBrowserSearch.feature");
formatter.feature({
  "line": 1,
  "name": "verifying search module of a Car Guruji site using scrnario outline",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site-using-scrnario-outline",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "verify produt search using firefox Driver",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site-using-scrnario-outline;verify-produt-search-using-firefox-driver",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@FirstChromeRunner"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Carguruji site on \"firefox\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I logged in the site with \"bfatogun@yahoo.com\" and \"sonsofgod\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify my account title text as \"ACCOUNT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I search for desired product as \"blouse\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click to make product search",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I verifyed the serched product  \"verifyProduct\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 27
    }
  ],
  "location": "MultiBrowserStepTest.i_am_on_Carguruji_site_on(String)"
});
formatter.result({
  "duration": 22915295800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bfatogun@yahoo.com",
      "offset": 27
    },
    {
      "val": "sonsofgod",
      "offset": 52
    }
  ],
  "location": "MultiBrowserStepTest.i_logged_in_the_site_with_and(String,String)"
});
formatter.result({
  "duration": 2071821900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT",
      "offset": 35
    }
  ],
  "location": "MultiBrowserStepTest.i_verify_my_account_title_text_as(String)"
});
formatter.result({
  "duration": 31048000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blouse",
      "offset": 33
    }
  ],
  "location": "MultiBrowserStepTest.i_search_for_desired_product_as(String)"
});
formatter.result({
  "duration": 1850689700,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchStepTest.i_click_to_make_product_search()"
});
formatter.result({
  "duration": 578700,
  "error_message": "java.lang.RuntimeException: java.lang.reflect.InvocationTargetException\r\n\tat org.openqa.selenium.support.PageFactory.instantiatePage(PageFactory.java:138)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:64)\r\n\tat stepDefination.ProductSearchStepTest.i_click_to_make_product_search(ProductSearchStepTest.java:88)\r\n\tat ✽.Then I click to make product search(mutipleBrowserSearch.feature:11)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.support.PageFactory.instantiatePage(PageFactory.java:129)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:64)\r\n\tat stepDefination.ProductSearchStepTest.i_click_to_make_product_search(ProductSearchStepTest.java:88)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat com.pageObjects.BaseClass.\u003cinit\u003e(BaseClass.java:18)\r\n\tat com.pageObjects.HomePage.\u003cinit\u003e(HomePage.java:23)\r\n\t... 53 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "verifyProduct",
      "offset": 33
    }
  ],
  "location": "MultiBrowserStepTest.i_verifyed_the_serched_product_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "test",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site-using-scrnario-outline;test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SecondChromeRunner"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on Carguruji web site on \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I logged into the site with \"bfatogun@yahoo.com\" and \"sonsofgod\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I verify my account title text for \"ACCOUNT\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click  whish list link",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I named the whish item",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I clicked to  save button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I deleted the saved  item",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 31
    }
  ],
  "location": "ChromeRunnerStepsTest.i_am_on_Carguruji_web_site_on(String)"
});
formatter.result({
  "duration": 10645851800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bfatogun@yahoo.com",
      "offset": 29
    },
    {
      "val": "sonsofgod",
      "offset": 54
    }
  ],
  "location": "ChromeRunnerStepsTest.i_logged_into_the_site_with_and(String,String)"
});
formatter.result({
  "duration": 2645924000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT",
      "offset": 36
    }
  ],
  "location": "ChromeRunnerStepsTest.i_verify_my_account_title_text_for(String)"
});
formatter.result({
  "duration": 229517900,
  "status": "passed"
});
formatter.match({
  "location": "ChromeRunnerStepsTest.i_click_whish_list_link()"
});
formatter.result({
  "duration": 1643373800,
  "status": "passed"
});
formatter.match({
  "location": "ChromeRunnerStepsTest.i_named_the_whish_item()"
});
formatter.result({
  "duration": 242707500,
  "status": "passed"
});
formatter.match({
  "location": "ChromeRunnerStepsTest.i_clicked_to_save_button()"
});
formatter.result({
  "duration": 2222351700,
  "status": "passed"
});
formatter.match({
  "location": "ChromeRunnerStepsTest.i_deleted_the_saved_item()"
});
formatter.result({
  "duration": 259247100,
  "status": "passed"
});
formatter.uri("productSearch.feature");
formatter.feature({
  "line": 1,
  "name": "verifying search module of a Car Guruji site",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "verify produt search",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on Carguruji on \"\u003cbrowserName\u003e\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I coud vrify the page tile as \"\u003cpageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I logged in the site with user name as \"\u003cuserName\u003e\" password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify my  account title text as \"\u003cmyAccountTitleText\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I search for desired product as  \"\u003csearchProduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click to make product search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verifyed the serched product as \"\u003cvrifyProduct\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search;",
  "rows": [
    {
      "cells": [
        "browserName",
        "pageTitle",
        "userName",
        "Password",
        "myAccountTitleText",
        "searchProduct",
        "vrifyProduct"
      ],
      "line": 20,
      "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search;;1"
    },
    {
      "cells": [
        "chrome",
        "Contact us - CarGuruji Shop",
        "bfatogun@yahoo.com",
        "sonsofgod",
        "ACCOUNT",
        "blouse",
        "BLOUSE"
      ],
      "line": 21,
      "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search;;2"
    },
    {
      "cells": [
        "firefox",
        "Contact us - CarGuruji Shop",
        "bfatogun@yahoo.com",
        "sonsofgod",
        "ACCOUNT",
        "blouse",
        "BLOUSE"
      ],
      "line": 22,
      "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "verify produt search",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on Carguruji on \"chrome\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I coud vrify the page tile as \"Contact us - CarGuruji Shop\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I logged in the site with user name as \"bfatogun@yahoo.com\" password as \"sonsofgod\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify my  account title text as \"ACCOUNT\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I search for desired product as  \"blouse\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click to make product search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verifyed the serched product as \"BLOUSE\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 22
    }
  ],
  "location": "ProductSearchStepTest.i_am_on_Carguruji_on_browser(String)"
});
formatter.result({
  "duration": 10284109600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact us - CarGuruji Shop",
      "offset": 31
    }
  ],
  "location": "ProductSearchStepTest.i_coud_vrify_the_page_tile_as(String)"
});
formatter.result({
  "duration": 1393319900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bfatogun@yahoo.com",
      "offset": 40
    },
    {
      "val": "sonsofgod",
      "offset": 73
    }
  ],
  "location": "ProductSearchStepTest.i_logged_in_the_site_with_user_name_as_password_as(String,String)"
});
formatter.result({
  "duration": 52345900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d80.0.3987.163)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IREDREU\u0027, ip: \u0027192.168.99.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\mrmra\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54497}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cbc38a8805c9b019ec4fcb5862ba89bc\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.pageObjects.LoginPage.populateLoginBox(LoginPage.java:25)\r\n\tat stepDefination.ProductSearchStepTest.i_logged_in_the_site_with_user_name_as_password_as(ProductSearchStepTest.java:65)\r\n\tat ✽.When I logged in the site with user name as \"bfatogun@yahoo.com\" password as \"sonsofgod\"(productSearch.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT",
      "offset": 36
    }
  ],
  "location": "ProductSearchStepTest.i_verify_my_account_title_text_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "blouse",
      "offset": 34
    }
  ],
  "location": "ProductSearchStepTest.i_search_for_desired_product_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProductSearchStepTest.i_click_to_make_product_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BLOUSE",
      "offset": 35
    }
  ],
  "location": "ProductSearchStepTest.i_verifyed_the_serched_product_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 22,
  "name": "verify produt search",
  "description": "",
  "id": "verifying-search-module-of-a-car-guruji-site;verify-produt-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on Carguruji on \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I coud vrify the page tile as \"Contact us - CarGuruji Shop\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I logged in the site with user name as \"bfatogun@yahoo.com\" password as \"sonsofgod\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify my  account title text as \"ACCOUNT\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I search for desired product as  \"blouse\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click to make product search",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I verifyed the serched product as \"BLOUSE\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 22
    }
  ],
  "location": "ProductSearchStepTest.i_am_on_Carguruji_on_browser(String)"
});
formatter.result({
  "duration": 13885685300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact us - CarGuruji Shop",
      "offset": 31
    }
  ],
  "location": "ProductSearchStepTest.i_coud_vrify_the_page_tile_as(String)"
});
formatter.result({
  "duration": 1780964200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bfatogun@yahoo.com",
      "offset": 40
    },
    {
      "val": "sonsofgod",
      "offset": 73
    }
  ],
  "location": "ProductSearchStepTest.i_logged_in_the_site_with_user_name_as_password_as(String,String)"
});
formatter.result({
  "duration": 2061751500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACCOUNT",
      "offset": 36
    }
  ],
  "location": "ProductSearchStepTest.i_verify_my_account_title_text_as(String)"
});
formatter.result({
  "duration": 25022000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blouse",
      "offset": 34
    }
  ],
  "location": "ProductSearchStepTest.i_search_for_desired_product_as(String)"
});
formatter.result({
  "duration": 38096700,
  "status": "passed"
});
formatter.match({
  "location": "ProductSearchStepTest.i_click_to_make_product_search()"
});
formatter.result({
  "duration": 1340249600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BLOUSE",
      "offset": 35
    }
  ],
  "location": "ProductSearchStepTest.i_verifyed_the_serched_product_as(String)"
});
formatter.result({
  "duration": 15824800,
  "status": "passed"
});
});