Feature: Toggle ToDo

Scenario: Validate user should be able to hide all todo's
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    When I enter "5" toDo 
    Then I verify "5" toDo displayed
    And I verify todo count with "5" todo
    When I click on toggle todo icon
    And I click on toggle todo icon
    #And I see all todos are hidden

Scenario: Validate user should be able to hide Active todo's
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    When I enter "5" toDo 
    Then I verify "5" toDo displayed
    And I verify todo count with "5" todo
    When I click on "Active" link 
    And I click on toggle todo icon
    And I see all todos are hidden
    
Scenario: Validate user should be able to hide Completed todo's
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    When I enter "5" toDo 
    Then I verify "5" toDo displayed
    And I verify todo count with "5" todo
    And I mark "2" todos as completed
    When I click on "Completed" link 
    And I click on toggle todo icon
    #And I see all todos are hidden