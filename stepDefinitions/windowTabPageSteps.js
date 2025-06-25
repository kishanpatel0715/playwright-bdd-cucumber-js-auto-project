import { createBdd } from 'playwright-bdd'
import { expect } from '@playwright/test'
import { getWindowTabPage } from '../helper/objectHelper'

const { Given, When, Then } = createBdd();

let secondlyOpenedPage;

Given('the user selects the Alerts, Frame & Windows from the menu', async ({ page }) => {
    const _windowTabPage = getWindowTabPage(page);
    await _windowTabPage.selectAlertsFrameWindowsFromMenu();
});

Given('the user selects Browser Windows from sub-menu', async ({ page }) => {
    const _windowTabPage = getWindowTabPage(page);
    await _windowTabPage.selectBrowserWindowsFromSubMenu();

});

When('the user clicks the New Tab button', async ({ page, context }) => {
    const _windowTabPage = getWindowTabPage(page);
    const [newTab] = await Promise.all([
    context.waitForEvent('page'),             // waits for new tab
    _windowTabPage.openNewTab()               
  ]);

  await newTab.waitForLoadState('domcontentloaded');
});

When('the user switches to the newly opened tab', async ({context}) => {
    const allOpenedPages = context.pages();
    secondlyOpenedPage = allOpenedPages[1];
    await secondlyOpenedPage.bringToFront();  
});

Then('the new tab is displayed with the text {string}', async ({ page }, expectedText) => {
    const _windowTabPage = getWindowTabPage(page);
     expect(await _windowTabPage.getMessageFromNewWindowOrTab(secondlyOpenedPage)).toBe(expectedText);
});

When('the user clicks the New Window button', async ({ page, context }) => {
    const _windowTabPage = getWindowTabPage(page);
    const [newWindow] = await Promise.all([
    context.waitForEvent('page'),             
    _windowTabPage.openNewWindow()               
  ]);

  await newWindow.waitForLoadState('domcontentloaded');
});

When('the user switches to the newly opened window', async ({context}) => {
    const allOpenedPages = context.pages();
    secondlyOpenedPage = allOpenedPages[1];
    await secondlyOpenedPage.bringToFront();
});

Then('the new window is displayed with the text {string}', async ({ page }, expectedText) => {
   const _windowTabPage = getWindowTabPage(page);
   expect(await _windowTabPage.getMessageFromNewWindowOrTab(secondlyOpenedPage)).toBe(expectedText);
});