Feature: PetClinic Owner Search

    @DEFECT
    Scenario: Searching for an existing owner
        Given the PetClinic application is open
        When the user looks for "George Franklin" in the owners table
        Then the user sees "George Franklin" listed in the table
        When the user searches for "George Franklin" using the table filter
        Then the user sees "George Franklin" listed in the table
