Feature: Owner Service API - Update

    Scenario: Updating an existing pet owner
        Given the service is ready to use
        When The user updates the pet owner with ID 12 using the data from "data/owner_update.json"
        Then the operation is successful with status code 200
        And The response includes the updated details of the pet owner named "Laura"

    Scenario: Updating a pet owner without a first name
        Given the service is ready to use
        When The user tries to update the pet owner with ID 1 using details from "data/owner_no_firstname.json"
        Then The action fails with confirmation code 400 because the first name is missing

    Scenario: Updating a pet owner without a last name
        Given the service is ready to use
        When The user tries to update the pet owner with ID 1 using details from "data/owner_no_lastname.json"
        Then The action fails with confirmation code 400 because the last name is missing

    Scenario: Updating a pet owner without any details
        Given the service is ready to use
        When The user tries to update the pet owner with ID 1 without providing any details
        Then The action fails with confirmation code 400 because no details were provided

    Scenario: Updating a pet owner with an invalid ID
        Given the service is ready to use
        When The user tries to update the pet owner with ID "aa" using details from "data/owner_no_firstname.json"
        Then The action fails with confirmation code 400 because the ID is invalid

    Scenario: Updating a pet owner with an empty ID
        Given the service is ready to use
        When The user tries to update the pet owner with an empty ID using details from "data/owner_update.json"
        Then The action fails with confirmation code 400 because no ID was provided
