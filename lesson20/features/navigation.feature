Feature: Navigation
    As a user
    I want to navigate between pages
    So that I can find the information I need

    Scenario: Navigate to For Athletes page
        When I open the homepage
        And I click on the "Read More" link in the "For Athletes" section
        Then the URL should contain "/services/for-athletes"

    Scenario: Navigate to For Parents page
        When I open the homepage
        And I click on the "Read More" link in the "For Parents" section
        Then the URL should contain "/services/for-parents"

    Scenario: Check logo as link to homepage
        When I open the page "/services/for-athletes"
        And I click on the logo
        Then I should be on the homepage
