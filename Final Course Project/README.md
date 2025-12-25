# Final Course Project

This repository contains automated UI and API tests for the FopHELP application, developed as a final course project.

## Technologies
- **Language:** TypeScript
- **Test Framework:** [Playwright](https://playwright.dev/)
- **Reporting:** [Allure Report](https://allurereport.org/)
- **CI/CD:** GitHub Actions
- **Linting/Formatting:** ESLint, Prettier

## Prerequisites
- Node.js (v20+ or v24.x recommended)
- npm

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "Final Course Project"
   ```
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```
4. Create a `.env` file (if required) based on your configuration needs, or ensure the test environment variables are set.

## Running Tests

### UI Tests
Runs all UI tests located in `tests/ui/` using the Chromium browser. Includes a global setup for authentication.
```bash
npm run test:ui
```

### API Tests
Runs all API tests located in `tests/api/`. These run serially to avoid race conditions.
```bash
npm run test:api
```

### Run All Tests
Execute both UI and API tests:
```bash
npm test
```

### Debugging
To run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

## Reporting
This project uses Allure for test reporting.

1. **Generate Report:**
   After running tests, generate the HTML report from the results:
   ```bash
   npm run report:generate
   ```

2. **Open Report:**
   Start a local server to view the report in your browser:
   ```bash
   npm run report:open
   ```

## CI/CD
The project is configured with GitHub Actions pipelines:
- **UI Tests**: Triggers on push/pull_request to main/master. Runs UI tests and posts an Allure summary to the PR.
- **API Tests**: Triggers on push/pull_request to main/master. Runs API tests and posts an Allure summary to the PR.
