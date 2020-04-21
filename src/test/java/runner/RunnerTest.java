package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= {"src/test/resources/features"},
		glue= {"stepDefination"},
		monochrome=true,
		dryRun=false,
		strict=false,
		plugin= {"pretty", "html:target/cucumber-html-report" }
		
		
		)

public class RunnerTest {

}
