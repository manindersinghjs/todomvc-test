Feature: Home Page - Tabs or Link

  Scenario: Validate Links on home page
    Given I am on home page
    And I should see link "Download" with href "https://github.com/tastejs/todomvc/zipball/1.3.0"
    And I should see link "View on GitHub" with href "https://github.com/tastejs/todomvc"
    And I should see link "Blog" with href "http://blog.tastejs.com/"
