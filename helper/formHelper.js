export async function selectRadioButtonOrCheckbox(page, optionToSelect)
{
   await page.locator('//*[text()="' + optionToSelect + '"]').click();

    // this.genderRadioButtonElement = this.page.locator('//*[text()="' + gender + '"]').click();
}

export async function selectFromDropdown(page, dropdownLocator, optionToSelect)
{
    await dropdownLocator.click();
    await page.locator('//*[text()="' + optionToSelect + '"]').click();
}