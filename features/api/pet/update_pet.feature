Feature: Pet Service API - Update

    @DEFECT
    Scenario: Updating an existing pet’s details
        Given the service is ready to use
        When the user updates the pet with ID 1 for owner with ID 1 with the "pet_update_body.json" details
        Then the operation is successful with status code 204
