Feature: Home Page

  Scenario: Validate home page
    Given I am on home page
    And I see title "TodoMVC"
    And I see logo image
    And I validate size and source of logo image