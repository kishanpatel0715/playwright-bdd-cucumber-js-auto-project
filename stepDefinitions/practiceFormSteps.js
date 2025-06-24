import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getPracticeFormPage } from '../helper/objectHelper';

const { Given, When, Then } = createBdd();

Given('the user selects the Forms from menu', async ({page}) => 
{
    const _practiceFormPage = getPracticeFormPage(page);
    await _practiceFormPage.selectFormsFromMenu();
});

When('the user selects Practice Form from the sub-menu', async ({page}) => {
    const _practiceFormPage = getPracticeFormPage(page);
    _practiceFormPage.selectPracticeFormFromSubMenu();
});

When('the user enters following details:', async ({page}, dataTable) => {
    const _practiceFormPage = getPracticeFormPage(page);
    const input = dataTable.rowsHash();
    await _practiceFormPage.enterFormDetails(input);
});

When('the user submits the form', async ({page}) => {
    const _practiceFormPage = getPracticeFormPage(page);
    await _practiceFormPage.submitForm();
});

Then('the form is submitted successfully', async ({page}) => {
    const _practiceFormPage = getPracticeFormPage(page);
    await expect(_practiceFormPage.successMessageElement).toHaveText('Thanks for submitting the form');
});

Then('the following details are displayed:', async ({page}, dataTable) => {
    const _practiceFormPage = getPracticeFormPage(page);
    const data = dataTable.rowsHash();
    const actualResult = await _practiceFormPage.getTableData(data);
   
    expect(actualResult[1]).toBe(data['First Name'] + ' ' + data['Last Name']);
    expect(actualResult[2]).toBe(data['Email']);
    expect(actualResult[3]).toBe(data['Gender']);
    expect(actualResult[4]).toBe(data['Mobile']);
        // await _practiceFormPage.enterDateOfBirth(data['Subjects']);
        // await _practiceFormPage.enterSubject(data['Subjects']);
    expect(actualResult[7]).toBe(data['Hobbies']);
    expect(actualResult[8]).toBe(data['Picture']);
    expect(actualResult[9]).toBe(data['Current Address']);
    expect(actualResult[10]).toBe(data['State'] + ' ' + data['City']);

});