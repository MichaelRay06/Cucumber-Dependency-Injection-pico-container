Feature: verifying search module of a Car Guruji site 




Scenario Outline: verify produt search 

	Given I am on Carguruji on "<browserName>" browser 
	Then I coud vrify the page tile as "<pageTitle>" 
	When I logged in the site with user name as "<userName>" password as "<Password>" 
	Then I verify my  account title text as "<myAccountTitleText>" 
	And I search for desired product as  "<searchProduct>" 
	Then I click to make product search 
	Then I verifyed the serched product as "<vrifyProduct>" 
	
	
	
	Examples: 
	
		|browserName     |pageTitle                      |userName                  |Password           |myAccountTitleText       |searchProduct    |vrifyProduct|
		|chrome          |Contact us - CarGuruji Shop    |bfatogun@yahoo.com        |sonsofgod          |ACCOUNT                  |blouse           |BLOUSE|
		|firefox         |Contact us - CarGuruji Shop    |bfatogun@yahoo.com        |sonsofgod          |ACCOUNT                  |blouse           |BLOUSE|
		