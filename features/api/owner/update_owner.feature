Feature: Owner Service API - Update

    Scenario: Updating an existing pet owner
        Given the service is ready to use
        When the user updates the pet owner with ID 11 using the data from "data/owner_update.json"
        Then the operation is successful with status code 200
        And the response includes the updated details of the pet owner named "Laura"

    Scenario: Updating a pet owner without a first name
        Given the service is ready to use
        When the user tries to update the pet owner with ID 1 using details from "data/owner_no_firstname.json"
        Then the action fails with status code 400

    Scenario: Updating a pet owner without a last name
        Given the service is ready to use
        When the user tries to update the pet owner with ID 1 using details from "data/owner_no_lastname.json"
        Then the action fails with status code 400

    Scenario: Updating a pet owner without any details
        Given the service is ready to use
        When the user tries to update the pet owner with ID 1 without providing any details
        Then the action fails with status code 400

    Scenario: Updating a pet owner with an invalid ID
        Given the service is ready to use
        When the user tries to update the pet owner with ID "aa" using details from "data/owner_no_firstname.json"
        Then the action fails with status code 400

    @BUG
    Scenario: Updating a pet owner with an empty ID
        Given the service is ready to use
        When the user tries to update the pet owner with an empty ID using details from "data/owner_update.json"
        Then the action fails with status code 400
