import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test'
import { getAlertsPage } from '../helper/objectHelper';

const { Given, When, Then } = createBdd();
let alertText;

Given('the user selects Alerts from the sub-menu', async ({ page }) => {
    const _alertsPage = getAlertsPage(page);
    await _alertsPage.selectAlertsFromSubMenu();
});

When('the user opens and accepts the regular alert', async ({ page }) => {
    const _alertsPage = getAlertsPage(page);

    page.once('dialog', async dialog => {
        alertText = dialog.message();
        dialog.accept();
    });
    await _alertsPage.openAlert();
});

Then('an alert is displayed with the text {string}', async ({ page }, expectedAlertText) => {
    const _alertsPage = getAlertsPage(page);
    expect(alertText).toBe(expectedAlertText);
});

Then('the alert is no longer visible', async ({ page }) => {
    const _alertsPage = getAlertsPage(page);
    expect(await _alertsPage.isAlertButtonVisible()).toBeTruthy();
});

When('the user opens and accepts the delayed alert', async ({ page }) => {
    const _alertsPage = getAlertsPage(page);
    const dialogPromise = page.waitForEvent('dialog');
    await _alertsPage.openDelayedAlert();
    const dialog = await dialogPromise;
    alertText = dialog.message();
    await dialog.accept();
});

Then('delayed alert is displayed with the text {string}', async ({ }, expectedAlertText) => {
    expect(alertText).toBe(expectedAlertText);
});

When('the user opens and cancels the confirm box', async ({ page }) => {
    const _alertsPage = getAlertsPage(page);

    page.once('dialog', async dialog => {
        alertText = dialog.message();
        await dialog.dismiss();
    });
    await _alertsPage.openAlertWithConfirmBox();
});

Then('{string} message is displayed', async ({ page }, expectedResultText) => {
    const _alertsPage = getAlertsPage(page);
    expect(await _alertsPage.resultMessageElement).toHaveText(expectedResultText);
});

When('the user opens and enters {string} in the prompt box', async ({ page }, textToEnter) => {
    const _alertsPage = getAlertsPage(page);
    page.once('dialog', async dialog => {
        alertText = dialog.message();
        await dialog.accept(textToEnter);
    });
    await _alertsPage.openAlertWithPrompt();
});

Then('{string} prompt message is displayed', async ({ page }, expectedPromptText) => {
    const _alertsPage = getAlertsPage(page);
    expect(await _alertsPage.promptResultElement).toHaveText(expectedPromptText);
});