Feature: Owner Service API - Retrieval

  @DEFECT
  Scenario: Listing all pet owners
    Given the service is ready to use
    When the user retrieves the list of pet owners
    Then the operation is successful with status code 200
    And the response contains a list of pet owners

  Scenario: Getting details of a specific pet owner
    Given the service is ready to use
    When the user retrieves the details of the pet owner with ID 10
    Then the operation is successful with status code 200
    And the response includes the details of the pet owner with ID 10

  Scenario: Getting details of a non-existent pet owner
    Given the service is ready to use
    When the user retrieves the details of the pet owner with ID 77
    Then the operation is successful with status code 500
    And the response indicates there is no owner with that id

  Scenario: Looking up a non-existent pet owner
    Given the service is ready to use
    When the user looks up the pet owner with ID 55
    Then the action fails with confirmation code 404 because the owner does not exist

  Scenario: Looking up a pet owner with an invalid ID
    Given the service is ready to use
    When the user looks up the pet owner with ID "aa"
    Then the action fails with confirmation code 400 because the ID is invalid

  Scenario: Looking up a pet owner without providing an ID
    Given the service is ready to use
    When the user looks up the pet owner with an empty ID
    Then the action fails with confirmation code 405 because no ID was provided
