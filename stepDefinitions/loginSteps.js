import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getLoginPageObject } from '../helper/objectHelper';

const { Given, When, Then } = createBdd();

Given('User is on the login page', async ({ page }) => {

    const _loginPage = getLoginPageObject(page);
    await _loginPage.navigateToSauceDemoHomePage();
});

When('user enters {string} and {string}', async ({ page }, username, password) => {

    const _loginPage = getLoginPageObject(page);
    await _loginPage.enterUserName(username);
    await _loginPage.enterPassword(password);
});

When('user login', async ({ page }) => {

    const _loginPage = getLoginPageObject(page);
    await _loginPage.login();
});

Then('user is logged-in successfully', async ({ page }) => {
    const _loginPage = getLoginPageObject(page);
    expect(await _loginPage.isSideBarVisible()).toBeTruthy();
});

When('user enters invalid {string} and {string}', async ({ page }, username, password) => {
    const _loginPage = getLoginPageObject(page);
    await _loginPage.enterUserName(username);
    await _loginPage.enterPassword(password);
});

Then('error message is displayed', async ({ page }) => {
    const _loginPage = getLoginPageObject(page);
    expect(await _loginPage.isErrorMessageVisible()).toBeTruthy();
});

When('user opens side-menu', async ({ page }) => {
    const _loginPage = getLoginPageObject(page);
    await _loginPage.openSideMenu();
});

When('user logout', async ({ page }) => {
    const _loginPage = getLoginPageObject(page);
    await _loginPage.logout();
});

Then('user is logged-out', async ({ page }) => {
    const _loginPage = getLoginPageObject(page);
    expect(await _loginPage.isLoginButtonVisible()).toBeTruthy();
});