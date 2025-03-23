
Feature: PetClinic Visit Management

  Scenario: Verifying a new visit added for an owner’s pet by api request
    Given a visit is added for owner with ID 1 and pet with ID 1 with date "2025-04-15" and description "Annual checkup"
    When the user navigates to the visits for owner with ID 1
    Then the user sees a visit with date "2025 Apr 15" and description "Annual checkup" in the visits list


  Scenario: Adding a new visit manually given owner name
    Given the PetClinic application is open
    When the user looks for "Harold Davis" in the owners table
    And the user adds a new visit with date "15/02/2025" and description "Surgery"
    Then the user sees a visit with date "2025 Feb 15" and description "Surgery" in the visits list
    