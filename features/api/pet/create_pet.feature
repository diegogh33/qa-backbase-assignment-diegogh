Feature: Pet Service API - Creation

    @BUG
    Scenario: Creating a new pet for an owner
        Given the service is ready to use
        When the user adds a new pet for owner with ID 1 with the "pet_create_body.json" details
        Then the operation is successful with status code 201
        And the response should match the created pet schema
