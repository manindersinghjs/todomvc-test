Feature: Validate Adding Multiple ToDo Page 

 Scenario: User should be able to add multiple new todos
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    And I enter "10" toDo 
    And I wait
    And I verify "10" toDo displayed
    And I verify todo count with "10" todo
    And I verify link "All" with href "http://todomvc.com/examples/backbone/#/"
    And I verify link "Active" with href "http://todomvc.com/examples/backbone/#/active"
    And I verify link "Completed" with href "http://todomvc.com/examples/backbone/#/completed"
