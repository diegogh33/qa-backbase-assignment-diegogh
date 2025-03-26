Feature: Pet Service API - Retrieval

    Scenario: Getting details of an existing pet
        Given the service is ready to use
        When the user requests the pet details for owner with ID 1 and pet with ID 1
        Then the operation is successful with status code 200
        And the response should match the pet schema
