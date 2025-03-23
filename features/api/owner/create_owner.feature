Feature: Owner Service API - Creation

    Scenario: Adding a new pet owner
        Given the service is ready to use
        When The user adds a pet owner using the data from "data/owner.json"
        Then the operation is successful with status code 201
    # And The response includes the details of the new pet owner named "Laura"

    Scenario: Adding a pet owner without a first name
        Given the service is ready to use
        When The user tries to add a pet owner with details from "data/owner_no_firstname.json"
        Then The action fails with confirmation code 400 because the first name is missing

    Scenario: Adding a pet owner without a last name
        Given the service is ready to use
        When The user tries to add a pet owner with details from "data/owner_no_lastname.json"
        Then The action fails with confirmation code 400 because the last name is missing

    Scenario: Adding a pet owner without any details
        Given the service is ready to use
        When The user tries to add a pet owner without providing any details
        Then The action fails with confirmation code 400 because no details were provided
