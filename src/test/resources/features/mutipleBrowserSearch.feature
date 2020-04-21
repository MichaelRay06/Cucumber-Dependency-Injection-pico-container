Feature: verifying search module of a Car Guruji site using scrnario outline
 
 

@FirstChromeRunner
Scenario: verify produt search using firefox Driver
Given  I am on Carguruji site on "firefox"
When  I logged in the site with "bfatogun@yahoo.com" and "sonsofgod"
Then  I verify my account title text as "ACCOUNT"
And  I search for desired product as "blouse" 
Then  I click to make product search
Then  I verifyed the serched product  "verifyProduct"



@SecondChromeRunner
Scenario: test
Given  I am on Carguruji web site on "chrome"
When  I logged into the site with "bfatogun@yahoo.com" and "sonsofgod"
Then  I verify my account title text for "ACCOUNT"
Then  I click  whish list link
And  I named the whish item
And  I clicked to  save button
Then  I deleted the saved  item 





