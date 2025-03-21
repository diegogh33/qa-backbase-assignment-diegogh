Feature: Tests for the Owner service in Spring PetClinic

  Scenario: Listing all pet owners
    Given The owner service is ready to use
    When The user retrieves the list of pet owners
    Then The operation is successful with status code 200
    And The response contains a list of pet owners

  Scenario: Getting details of a specific pet owner
    Given The owner service is ready to use
    When The user retrieves the details of the pet owner with ID 12
    Then The operation is successful with status code 200
    And The response includes the details of the pet owner with ID 12

  Scenario: Looking up a non-existent pet owner
    Given The owner service is ready to use
    When The user looks up the pet owner with ID 55
    Then The action fails with confirmation code 404 because the owner does not exist

  Scenario: Looking up a pet owner with an invalid ID
    Given The owner service is ready to use
    When The user looks up the pet owner with ID "aa"
    Then The action fails with confirmation code 400 because the ID is invalid

  Scenario: Looking up a pet owner without providing an ID
    Given The owner service is ready to use
    When The user looks up the pet owner with an empty ID
    Then The action fails with confirmation code 405 because no ID was provided