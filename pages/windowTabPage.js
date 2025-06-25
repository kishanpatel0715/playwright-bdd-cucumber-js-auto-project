exports.windowTabPage = class windowTabPage{
    constructor(page){
        this.page = page;
        this.alertsFrameWindowsElement = page.locator('text= Alerts, Frame & Windows');
        this.browserWindowsSubMenuElement = page.locator('text=Browser Windows');
        this.newTabButtonElement = page.locator('#tabButton');
        this.newWindowButtonElement = page.locator('#windowButton');
    }

    async selectAlertsFrameWindowsFromMenu()
    {
        await this.alertsFrameWindowsElement.click();
    }

    async selectBrowserWindowsFromSubMenu()
    {
        await this.browserWindowsSubMenuElement.click();
    }

    async openNewTab()
    {
        await this.newTabButtonElement.click();
    }

    async openNewWindow()
    {
        await this.newWindowButtonElement.click();
    }

    async getMessageFromNewWindowOrTab(newPage)
    {
        return await newPage.locator('#sampleHeading').textContent();
    }
}