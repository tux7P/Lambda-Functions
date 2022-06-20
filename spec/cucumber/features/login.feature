Feature: Loginaction Endpoint

  Scenario: Loginaction POST request returns 200 with username and password as a header
    When I send POST request with valid auth headers
    Then I receive success response with auth token
  
  Scenario: Loginaction POST request returns 401 without auth headers
    When I send POST request without auth headers
    Then I receive unauth response