import { getPracticeFormPage } from '../helper/objectHelper';
import { selectRadioButtonOrCheckbox } from '../helper/formHelper';
import { selectFromDropdown } from '../helper/formHelper';

exports.practiceFormPage = class practiceFormPage {

    constructor(page) {
        this.page = page;
        this.formsMenuElement = page.locator('text= Forms');
        this.practiceFormSubMenuElement = page.locator('text= Practice Form')
        this.firstNameTextBoxElement = page.getByPlaceholder('First Name');
        this.lastNameTextBoxElement = page.getByPlaceholder('Last Name');
        this.emailTextBoxElement = page.locator('#userEmail');    
        this.mobileNumberTextBoxElement = page.getByPlaceholder('Mobile Number');
        this.hobbiesCheckBoxElement = page.locator('text= Reading')
        this.uploadFileButtonElement = page.locator('#uploadPicture');
        this.currentAddressTextBoxElement = page.getByPlaceholder('Current Address');
        this.stateDropDownElement = page.locator('#state');
        this.cityDropDownElement = page.locator('#city');
        this.submitButtonElement = page.locator('#submit');
        this.successMessageElement = page.locator('#example-modal-sizes-title-lg')
    }

    async selectFormsFromMenu() 
    {
        await this.formsMenuElement.click();
    }

    async selectPracticeFormFromSubMenu() 
    {
        await this.practiceFormSubMenuElement.click();
    }

    async enterFirstName(firstName)
    {
        await this.firstNameTextBoxElement.fill(firstName);
    }

    async enterLastName(lastName) 
    {
        await this.lastNameTextBoxElement.fill(lastName);
    }

    async enterEmail(email) 
    {
        await this.emailTextBoxElement.fill(email);
    }

    async selectGender(gender) 
    {
         await selectRadioButtonOrCheckbox(this.page, gender)
    }

    async enterMobileNumber(mobileNumber) 
    {
        await this.mobileNumberTextBoxElement.fill(mobileNumber);
    }

    async enterDateOfBirth(dateOfBirth) 
    {
        await this.dateOfBirthDatePickerElement.fill(dateOfBirth);
    }

    async enterSubject(subject) 
    {
        await this.subjectsTextBoxElement.fill(subject);
        await page.keyboard.press('Tab');
    }

    async selectHobbies(hobby) 
    {
        await selectRadioButtonOrCheckbox(this.page, hobby);
    }

    async uploadFile(filePath) 
    {
        await this.uploadFileButtonElement.setInputFiles(filePath);
    }

    async enterAddress(address) 
    {
        await this.currentAddressTextBoxElement.fill(address);
    }

    async selectState(state)
    {  
       await selectFromDropdown(this.page, this.stateDropDownElement, state);
    }

    async selectCity(city) 
    {
         await selectFromDropdown(this.page, this.cityDropDownElement, city);
    }

    async enterFormDetails(data) 
    {
        const _practiceFormPage = getPracticeFormPage(this.page);
        await _practiceFormPage.enterFirstName(data['First Name']);
        await _practiceFormPage.enterLastName(data['Last Name']);
        await _practiceFormPage.enterEmail(data['Email']);
        await _practiceFormPage.selectGender(data['Gender']);
        await _practiceFormPage.enterMobileNumber(data['Mobile']);
        await _practiceFormPage.selectHobbies(data['Hobbies']);
        await _practiceFormPage.uploadFile(data['Picture']);
        await _practiceFormPage.enterAddress(data['Current Address']);
        await _practiceFormPage.selectState(data['State']);
        await _practiceFormPage.selectCity(data['City']);
    }
    
    async submitForm() 
    {
        await this.submitButtonElement.click();
    }

    async getTableData() 
    {
        const rows = await this.page.$$(`.modal-body tr`);
        const values = [];
        for (const row of rows) {
        const cells = await row.$$eval('td', tds => tds.map(td => td.innerText.trim()));
        values.push(cells[1]); 
    }
        return values;
    }  
}