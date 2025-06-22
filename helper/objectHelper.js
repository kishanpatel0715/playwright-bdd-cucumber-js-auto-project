import { loginPage } from '../pages/loginPage';

 export function getLoginPageObject(page)
    {
        return new loginPage(page);
    }