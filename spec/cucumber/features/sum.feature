Feature: Sumaction Endpoint

  Scenario: Sumaction valid POST request to add two numbers
    When I send POST request with two numbers and valid header
    Then I receive success response with a total of two numbers