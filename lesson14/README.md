API Testing Framework - Official Joke API

This project is a simple API framework for testing the Official Joke API using TypeScript, Vitest, and Fetch.
It is built following the Page Object / Service Object pattern and includes a basic logger and response structure validation.

📂 Project Structure

project-root/
│
├─ src/
│ ├─ config/
│ │ └─ api-config.ts       # API configuration (baseUrl, dotenv)
│ │
│ ├─ core/
│ │ ├─ api-client.ts       # HTTP client using Fetch with logging
│ │ ├─ base-api-object.ts  # Base API object
│ │ └─ base-service.ts     # Base service
│ │
│ ├─ helpers/
│ │ └─ logger.ts           # Logging requests, responses, and errors
│ │
│ ├─ types/
│ │ └─ joke.ts             # Joke interface
│ │
│ ├─ api-objects/
│ │ └─ jokes.api.ts        # API endpoint URLs
│ │
│ └─ services/
│     └─ jokes.service.ts  # Methods for working with the API
│
└─ tests/
    └─ jokes.test.ts       # API tests

