Feature: Validae ToDo Page

  Scenario: Validate Todo page one
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    And I see enter new toDo "todo one"
    And I press enter
    And I verify "todo one" is displayed
    And I verify todo count with "1" todo
    And I verify link "All" with href "http://todomvc.com/examples/backbone/#/"
    And I verify link "Active" with href "http://todomvc.com/examples/backbone/#/active"
    And I verify link "Completed" with href "http://todomvc.com/examples/backbone/#/completed"

  Scenario: Validate Todo page two
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    And I see enter new toDo "todo one"
    And I press enter
    And I verify "todo one" is displayed
    And I verify todo count with "1" todo
    And I verify link "All" with href "http://todomvc.com/examples/backbone/#/"
    And I verify link "Active" with href "http://todomvc.com/examples/backbone/#/active"
    And I verify link "Completed" with href "http://todomvc.com/examples/backbone/#/completed"