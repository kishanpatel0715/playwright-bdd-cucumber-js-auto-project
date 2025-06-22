exports.dynamicPropertiesPage = class dynamicPropertiesPage{

    constructor (page)
    {
        this.page = page;
        this.elementsMenuElement = page.locator('text=Elements');
        this.dynamicPropertiesSubMenuElement = page.locator('text=Dynamic Properties');
        this.delayedVisibilityButtonElement = page.locator('#visibleAfter');
        this.enabledButtonElement = page.locator('#enableAfter');
    }

    async navigateToDemoQaHomePage()
    {
        await this.page.goto('https://demoqa.com/');
    }

    async selectElementsFromMenu()
    {
        await this.elementsMenuElement.click();
    }

    async selectDynamicPropertiesFromSubMenu()
    {
        await this.dynamicPropertiesSubMenuElement.click();
    }

    async isButtonVisible()
    {
        return await this.delayedVisibilityButtonElement.isVisible();
    }
}