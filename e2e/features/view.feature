Feature: Validae ToDo Page

  Scenario: Validate Todo page
    Given I am on ToDo page 
    And I see title "Backbone.js • TodoMVC"
    And I see header "todos"
    And I see input with placeholder "What needs to be done?"