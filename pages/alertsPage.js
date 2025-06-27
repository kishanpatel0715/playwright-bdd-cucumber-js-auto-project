exports.alertsPage = class alertsPage{
    
    constructor(page)
    {
        this.page = page;
        this.alertsSubMenuElement = page.getByRole('list').getByText('Alerts');
        this.alertButtonElement = page.locator('#alertButton');
        this.delayedAlertElement = page.locator('#timerAlertButton');
        this.alertWithConfirmBoxElement = page.locator('#confirmButton');
        this.alertWithPromptElement = page.locator('#promtButton');
        this.resultMessageElement = page.locator('#confirmResult');
        this.promptResultElement = page.locator('#promptResult');
    }

    async selectAlertsFromSubMenu()
    {
        await this.alertsSubMenuElement.click();
    } 

    async openAlert()
    {
        await this.alertButtonElement.click()
    }

    async openDelayedAlert()
    {
        await this.delayedAlertElement .click();
    }

    async openAlertWithConfirmBox()
    {
        await this.alertWithConfirmBoxElement .click();
    }

    async isAlertButtonVisible()
    {
        return await this.alertButtonElement.isVisible();
    }

    async openAlertWithPrompt()
    {
        await this.alertWithPromptElement.click();
    }
}