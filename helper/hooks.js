import { Before, After } from 'playwright-bdd';

Before(async ({ page }) => {

});

After(async ({ page }) => {

    page.close();
});