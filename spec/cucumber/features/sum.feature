Feature: Sumaction Endpoint

  Scenario: Sumaction valid POST request to add two numbers
    When I send POST request with two numbers and valid header
    Then I receive success response with a total of two numbers

  Scenario: Sumaction POST request returns 401 without authotization headers
    When I send POST request without authotization headers
    Then I get unauth response

   Scenario: Sumaction POST request returns 500 without request body
    When I send POST request with authotization header and without request body
    Then I get internal server error
  
 