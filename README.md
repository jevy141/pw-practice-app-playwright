# Modern Web Automation Framework using Playwright & TypeScript

## Overview

This project is a modern web automation framework built using Playwright, TypeScript, Node.js, Docker, Docker Compose, and GitHub.

The framework follows the Page Object Model (POM) design pattern and supports reusable fixtures, cross-browser execution, parallel execution, headless execution, reporting, and containerized test execution.

---

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Docker
* Docker Compose
* Git & GitHub

---

## Framework Features

* Page Object Model (POM)
* Reusable Fixtures & Utilities
* End-to-End UI Automation
* Parallel Test Execution
* Cross-Browser Testing
* Headless Execution
* HTML Reporting
* Screenshot Capture
* Dockerized Test Execution
* Docker Compose Integration

---

## Supported Browsers

* Chromium
* Firefox
* WebKit

---

## Project Structure

```text
tests/
pages/
fixtures/
utils/
playwright-report/
test-results/
playwright.config.ts
docker-compose.yml
Dockerfile
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Tests Locally

```bash
npx playwright test
```

Run Chrome Tests:

```bash
npm run pageObjects-chrome
```

---

## Docker Execution

Build Docker Image:

```bash
docker build -t playwright-test .
```

Run Container:

```bash
docker run playwright-test
```

---

## Docker Compose Execution

Build Service:

```bash
docker compose build
```

Run Tests:

```bash
docker compose up
```

Stop Services:

```bash
docker compose down
```

### Docker Compose Configuration

The project uses Docker Compose to:

* Build the Playwright Docker image
* Execute Playwright test suites
* Generate Playwright Reports
* Persist test execution results
* Mount report and test result volumes

```yaml
services:
  playwright-test:
    image: playwright-test
    build:
      context: .
      dockerfile: ./Dockerfile

    command: npm run pageObjects-chrome

    volumes:
      - ./playwright-report:/app/playwright-report
      - ./test-results:/app/test-results
```

---

## Reporting

Generated Artifacts:

* Playwright HTML Report
* Test Execution Results
* Screenshots (on failure)

View Report:

```bash
npx playwright show-report
```

---

## Source Control

GitHub Repository:

https://github.com/jevy141/pw-practice-app-playwright

---

## Key Highlights

* Playwright with TypeScript
* Page Object Model (POM)
* Cross-Browser Testing
* Parallel Execution
* Headless Execution
* Dockerized Execution
* Docker Compose Integration
* CI/CD Ready Framework

---

## Author

Sohan Rana
