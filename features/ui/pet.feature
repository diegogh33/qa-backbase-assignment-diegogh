Feature: PetClinic Pet Management

  Scenario: Adding a pet to a new owner
    Given the PetClinic application is open
    When the user creates a new owner with the following details
      | First Name | Last Name | Address      | City       | Telephone  |
      | Jon        | Snow      | 123 The Wall | Invernalia | 9876543210 |
    Then the user sees "Jon Snow" listed in the owners table
    When the user enters into "Jon Snow" details
    And the user adds a pet named "Bolita" with type "dog" and birth date "15/01/2023"
    Then the user should see "Bolita" listed as a pet for "Jon Snow"


  @DEFECT
  Scenario: Attempting to add a pet with a future birth date
    Given the PetClinic application is open
    When the user looks for "Maria Escobito" in the owners table
    And the user adds a pet named "Slither" with type "snake" and birth date "01/12/2027"
    Then the user should not see "Slither" listed as a pet for "Maria Escobito"
