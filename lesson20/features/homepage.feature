Feature: Homepage
    As a user
    I want to see the HS Recruiting homepage
    So that I can learn about the service

    Scenario: Opening the homepage
        When I open the homepage
        Then the page should load successfully
        And the page title should contain "HS Recruiting"

    Scenario: Checking main text
        When I open the homepage
        Then I should see the text "Get In The College Game"

    Scenario: Checking service sections
        When I open the homepage
        Then I should see the section "For Athletes"
        And I should see the section "For Parents"
        And I should see the section "For Colleges and Scouts"
        And I should see the section "For HS/Club Coaches"
