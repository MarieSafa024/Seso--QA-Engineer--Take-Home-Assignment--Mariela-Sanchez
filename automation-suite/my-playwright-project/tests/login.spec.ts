import{test} from '@playwright/test';
import{LoginPage}  from '../page-objects/loginPage'

test('001Login - Validate Login Page  look and Feel',async({page}) => {
    try{
    const loginpage = new LoginPage(page)
    await loginpage.loginPagelanding();
    await loginpage.loginSplashUI();
    await loginpage.loginFormUI();
} catch(error){
    console.error('Error ocurred, please rerun or check for bugs',error);
    test.fail();
}finally{
    await page.close();
}

}); 

test('002Login - Validate Login Page -   Form Functionality - Happy Path',async({page}) => {
    try{
    const loginpage = new LoginPage(page)
    await loginpage.loginPagelanding();
    await loginpage.loginToSite();
  
} catch(error){
    console.error('Error ocurred, please rerun or check for bugs',error);
    test.fail();
}finally{
    await page.close();
}

}); 