Feature: Loginaction Endpoint

  Scenario: Loginaction post request returns 200 with username and password as a header
    When I send post request with valid auth headers
    Then I receive success response with auth token