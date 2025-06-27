import { loginPage } from '../pages/loginPage';
import { dynamicPropertiesPage } from '../pages/dynamicPropertiesPage';
import { practiceFormPage } from '../pages/practiceFormPage';
import { windowTabPage } from '../pages/windowTabPage';
import { downloadUploadPage } from '../pages/downloadUploadPage';
import { alertsPage } from '../pages/alertsPage'

export function getLoginPageObject(page) {
    return new loginPage(page);
}

export function getDynamicPropertiesPage(page) {
    return new dynamicPropertiesPage(page);
}

export function getPracticeFormPage(page) {
    return new practiceFormPage(page);
}

export function getWindowTabPage(page)
{
    return new windowTabPage(page);
}

export function getdownloadUploadPage(page)
{
    return new downloadUploadPage(page);
}

export function getAlertsPage(page)
{
    return new alertsPage(page);
}