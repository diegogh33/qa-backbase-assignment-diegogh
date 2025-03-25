# 🧪 QA Automation Assignment – PetClinic

## 📖 Overview

This project is an automated test framework developed for the [Spring PetClinic](https://github.com/spring-projects/spring-petclinic) web application. It combines modern testing technologies and best practices to validate UI and API functionalities.

**Tech Stack:**

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/) for UI automation
- [Cucumber.js](https://github.com/cucumber/cucumber-js) for BDD-style testing
- [Docker](https://www.docker.com/) for local environment provisioning
- [Node.js](https://nodejs.org/)
- [GitHub Actions](https://docs.github.com/en/actions) for CI pipelines

The test framework uses a Behavior-Driven Development (BDD) approach to ensure clear communication of test scenarios and expected behaviors.

---

## 📂 Project Structure

```bash
rnd-qa-assignment-diegogh33/
├── .github/                # GitHub Actions workflows
├── config/                 # Configuration files
├── data/                   # JSON payloads for API tests
├── features/               # Gherkin feature files (UI & API)
│   ├── api/                # API features
│   └── ui/                 # UI features
├── helpers/                # Utility functions
├── manual-tests-cases/     # Manual test case documentation
├── reports/                # Test reports (HTML/JSON)
├── steps/                  # Step definitions (UI & API)
│   ├── api/                # API steps
│   └── ui/                 # UI tests
├── support/                # Hooks, World, reporting logic
├── docker-compose.yml      # Docker configuration
├── playwright.config.ts    # Playwright config file
├── package.json            # Project metadata and scripts
└── tsconfig.json           # TypeScript config
```

---

## ✅ Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/get-started)
- [npm](https://www.npmjs.com/)

Then, install project dependencies:

```bash
npm install
```

- **Install Playwright**

```bash
npm init playwright@latest
```

---

## 🐳 Running with Docker

To launch the PetClinic application locally:

```bash
docker-compose up -d
```

This runs the application at: `http://localhost:8080`

---

## 🚀 How to Run Tests

You don't need to know TypeScript or Playwright to run the tests.

### Run All Tests (UI + API)

```bash
npm run test_all
```

### Run Only UI Tests

```bash
npm run test_UI
```

### Run Only API Tests

```bash
npm run test_API
```

---

## 📊 Accessing Test Reports

After executing any test suite, a report will be generated in:

```
reports/cucumber-report.html
```

Open this file in your browser to view the full test execution report.

To regenerate the report manually:

```bash
npm run report
```

---

## 👀 Headless Mode (UI Tests)

By default, Playwright runs in **headless mode**.

To run tests with the browser UI visible (headed mode), modify the `playwright.config.ts`:

```ts
use: {
  headless: false,
  ...
}
```

You can also set it dynamically using an environment variable in the config file.

---

## 🔁 Continuous Integration with GitHub Actions

The project includes a GitHub Actions workflow at:

```
.github/workflows/ci.yml
```

It will:

- Install dependencies
- Launch Playwright and install browsers
- Run UI and API tests
- Generate the HTML report
- Upload the report and screenshots (if failures) as artifacts

To test CI in your branch, push to a branch that matches:

```yaml
on:
  push:
    branches: [qa-backbase-assignment-diegogh, main]
```

---

## 🐞 Known Bugs (Expected Failures)

Some scenarios are marked with the `@BUG` tag and are **expected to fail**, representing known issues.

### 🧪 API Test Bugs

| Scenario                            | Reason                                    |
| ----------------------------------- | ----------------------------------------- |
| Listing all pet owners              | Looks the service is not found            |
| Looking up a non-existent pet owner | API does not return proper response       |
| Creating a new pet for an owner     | Internal server error                     |
| Updating an existing pet’s details  | API does not return proper response       |
| Updating a pet owner without ID     | API does not return proper response       |

### 🧪 UI Test Bugs

| Scenario                                          | Reason                                                                |
| ------------------------------------------------- | --------------------------------------------------------------------- |
| Searching for an existing owner                   | Owners are not showed when entering name + surname in the search form |
| Attempting to add a pet with a future birth date  | It is possible to create a pet with future date of birth              |

---

## 📝 Manual Test Cases

Manual test cases are documented in:

```
/manual-tests-cases/
```

You’ll find `.xlsx` files describing tests not yet automated, edge cases, or exploratory test ideas.

---

## 📌 Additional Notes

- Playwright screenshots and traces are saved automatically when failures occur.
- Artifacts are uploaded in CI for debugging (`cucumber-report.html`, screenshots, etc).
- Tags can be used in feature files to filter scenarios:
  ```bash
  npx cucumber-js --tags "not @BUG"
  ```

---

## 👤 Author

This project was developed by **@diegogh33** as part of a QA assignment.

---

Feel free to fork, clone, and improve this project!

