Feature: Owner Service API - Creation

    Scenario: Adding a new pet owner
        Given the service is ready to use
        When the user adds a pet owner using the data from "data/owner.json"
        Then the operation is successful with status code 201

    Scenario: Adding a pet owner without a first name
        Given the service is ready to use
        When the user tries to add a pet owner with details from "data/owner_no_firstname.json"
        Then the action fails with status code 400

    Scenario: Adding a pet owner without a last name
        Given the service is ready to use
        When the user tries to add a pet owner with details from "data/owner_no_lastname.json"
        Then the action fails with status code 400

    Scenario: Adding a pet owner without any details
        Given the service is ready to use
        When the user tries to add a pet owner without providing any details
        Then the action fails with status code 400
