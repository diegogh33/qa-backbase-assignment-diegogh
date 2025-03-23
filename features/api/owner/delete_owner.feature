Feature: Owner Service API - Delete

    Scenario: Attempting to delete a pet owner
        Given the service is ready to use
        When the user deletes the pet owner with ID 1
        Then the operation fails with status code 405 because deletion is not supported
