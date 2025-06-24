import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getDynamicPropertiesPage } from '../helper/objectHelper';

const { Given, Then } = createBdd();

Given('the user navigates to DemoQA home page', async ({ page }) => {
    const _dynamicPropertiesPage = getDynamicPropertiesPage(page);
    await _dynamicPropertiesPage.navigateToDemoQaHomePage();
});

Given('user selects the Elements from menu', async ({ page }) => {
    const _dynamicPropertiesPage = getDynamicPropertiesPage(page);
    await _dynamicPropertiesPage.selectElementsFromMenu();
});

Given('user selects Dynamic Properties from sub-menu', async ({ page }) => {
    const _dynamicPropertiesPage = getDynamicPropertiesPage(page);
    await _dynamicPropertiesPage.selectDynamicPropertiesFromSubMenu();
});

Then('after {int} seconds, button is visible', async ({ page }, arg) => {
    const _dynamicPropertiesPage = getDynamicPropertiesPage(page);
    await _dynamicPropertiesPage.delayedVisibilityButtonElement.waitFor({ state: 'visible', timeout: 6000 })
    expect(await _dynamicPropertiesPage.isButtonVisible()).toBeTruthy();
});

Then('after {int} seconds, button is enabled', async ({ page }, arg) => {
    const _dynamicPropertiesPage = getDynamicPropertiesPage(page);
    await expect(_dynamicPropertiesPage.enabledButtonElement).toBeEnabled({ timeout: 6000 });
});
