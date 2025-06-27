@Alerts
Feature: Alerts
This feature file covers the Alert scenarios

  Background: 
    Given the user navigates to DemoQA home page
    And the user selects the Alerts, Frame & Windows from the menu
    And the user selects Alerts from the sub-menu

  Scenario: TC423459 Verify alert text and accept behavior
    When the user opens and accepts the regular alert
    Then an alert is displayed with the text "You clicked a button"
    And the alert is no longer visible

  Scenario: TC523459 Verify alert text when it appeares after 5 seconds and accept behavior
    When the user opens and accepts the delayed alert
    Then delayed alert is displayed with the text "This alert appeared after 5 seconds"
    And the alert is no longer visible

  Scenario: TC623459 Verify cancel action for confirm box
    When the user opens and cancels the confirm box
    Then an alert is displayed with the text "Do you confirm action?"
    And  the alert is no longer visible
    And "You selected Cancel" message is displayed

  Scenario: TC723459 Verify prompt
    When the user opens and enters "Kishan Patel" in the prompt box
    Then an alert is displayed with the text "Please enter your name"
    And "You entered Kishan Patel" prompt message is displayed