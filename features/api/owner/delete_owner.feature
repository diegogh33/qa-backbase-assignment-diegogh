Feature: Tests for deleting Owners in Spring PetClinic

    Scenario: Attempting to delete a pet owner
        Given The owner service is ready to use
        When The user deletes the pet owner with ID 1
        Then The operation fails with status code 405 because deletion is not supported