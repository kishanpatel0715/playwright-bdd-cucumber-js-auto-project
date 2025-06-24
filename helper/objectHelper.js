import { loginPage } from '../pages/loginPage';
import { dynamicPropertiesPage } from '../pages/dynamicPropertiesPage'
import { practiceFormPage } from '../pages/practiceFormPage'

export function getLoginPageObject(page) {
    return new loginPage(page);
}

export function getDynamicPropertiesPage(page) {
    return new dynamicPropertiesPage(page);
}

export function getPracticeFormPage(page) {
    return new practiceFormPage(page);
}