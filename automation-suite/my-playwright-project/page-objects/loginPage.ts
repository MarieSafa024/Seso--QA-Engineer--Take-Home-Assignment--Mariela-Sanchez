
import { expect, Page } from "@playwright/test";


export class LoginPage{
    readonly page: Page 

    constructor(page: Page){
        this.page = page
        const imageLocator = this.page.locator('img[src="https://seso-static-assets-public.s3.amazonaws.com/seso-logo-green-a-100x100.png"]');
        const formLabel = this.page.locator('h5.ant-typography');
        const emailLabel = this.page.locator('label[for="email"][class="ant-form-item-required"][title="Email"]');       
        const emailtextbox = this.page.locator('input[type="text"][id="email"][class="ant-input"]');
        const passwordLabel = this.page.locator('label[for="password"][class="ant-form-item-required"][title="Password"]');
        const passwordtextbox= this.page.locator('input[action="click"][id="password"][type="password"][class="ant-input"]');
        const submitButton = this.page.locator('button[type="submit"][class="ant-btn ant-btn-primary"]');
        const signUpLink = this.page.locator('a[href="/signup"]');
        
        }
    //This function rediretcs to the login page
    async loginPagelanding(){
        await this.page.goto('http://localhost:3000/login');

    }
   //This function Validates the Look and feel for the Login Splash component
    async loginSplashUI(){
        const splashElement = this.page.locator('.splash');
        console.log('Validating Splash is present')
        await expect(splashElement).toBeVisible(); 
        await expect(splashElement).toContainText('Our mission is');
        console.log('All elements found');
    
    }
    //This function Validates the Login Splash component
    async loginFormUI(){
        const imageLocator = this.page.locator('img[src="https://seso-static-assets-public.s3.amazonaws.com/seso-logo-green-a-100x100.png"]');
        const formLabel = this.page.locator('h5.ant-typography');
        const emailLabel = this.page.locator('label[for="email"][class="ant-form-item-required"][title="Email"]');       
        const emailtextbox = this.page.locator('input[type="text"][id="email"][class="ant-input"]');
        const passwordLabel = this.page.locator('label[for="password"][class="ant-form-item-required"][title="Password"]');
        const passwordtextbox= this.page.locator('input[action="click"][id="password"][type="password"][class="ant-input"]');
        const submitButton = this.page.locator('button[type="submit"][class="ant-btn ant-btn-primary"]');
        const signUpLink = this.page.locator('a[href="/signup"]');

        await expect(imageLocator).toBeVisible();        
        await expect(formLabel).toHaveText('Login');        
        await expect(emailLabel).toHaveText('Email');
        await expect(emailtextbox).toBeVisible();
        await expect(passwordLabel).toHaveText('Password');
        await expect(passwordtextbox).toBeVisible();
        await expect(submitButton).toHaveText('Submit');
        await expect(signUpLink).toHaveText('Need an account?');
        console.log('All elements found');
    }
    //This function Validates user is able to Login
    async loginToSite(){
       
    await this.page.goto('http://localhost:3000/login');
    const emailtextbox = this.page.locator('input[type="text"][id="email"][class="ant-input"]');      
    const passwordtextbox= this.page.locator('input[action="click"][id="password"][type="password"][class="ant-input"]');
    const submitButton = this.page.locator('button[type="submit"][class="ant-btn ant-btn-primary"]');   
    await emailtextbox.fill('mariesafa2493@gmail.com');   
    await passwordtextbox.fill('Test123');
    await submitButton.click();
    
      
    }
}

