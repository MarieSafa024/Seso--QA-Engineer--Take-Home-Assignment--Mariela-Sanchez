import {test as setup} from  '@playwright/test';
 const authFile = 'auth./user.jason';
setup('authentication', async({page})=>{
    await page.goto('http://localhost:3000/login');
    const emailtextbox = page.locator('input[type="text"][id="email"][class="ant-input"]');      
    const passwordtextbox= page.locator('input[action="click"][id="password"][type="password"][class="ant-input"]');
    const submitButton = page.locator('button[type="submit"][class="ant-btn ant-btn-primary"]');   
    await emailtextbox.fill('mariesafa2493@gmail.com');   
    await passwordtextbox.fill('test123');
    submitButton.click();
    await page.waitForResponse('http://localhost:3000/_next/webpack-hmr?page=/');
    await page.context().storageState({path: authFile})

})
