import { loginPage } from '../pages/loginPage';
import { dynamicPropertiesPage } from '../pages/dynamicPropertiesPage'

export function getLoginPageObject(page) {
    return new loginPage(page);
}

export function getDynamicPropertiesPage(page) {
    return new dynamicPropertiesPage(page);
}