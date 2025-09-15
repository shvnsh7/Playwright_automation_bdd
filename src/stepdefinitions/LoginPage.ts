import { Page,Locator,expect } from "@playwright/test";

class LoginPage{
    protected page: Page;
    // private username: Locator;
    private usernameField:Locator;
    private passwordField:Locator;
    private loginButton:Locator;



    /*
    Initilizes a new instance of the Login class
    @param page- The page object used to interact with thw web page
    */

    constructor (page:Page){
        this.page=page;
        // this.username=this.page.locator(getby)
        this.usernameField = this.page.getByPlaceholder('Username');
        this.passwordField = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
        // this.productsTitle = this.page.getByText('Products');
    }
    
    async navigate(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Async method to login with credentials
  async login(username: string, password: string): Promise<void> {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

    // async L
}
module.exports={LoginPage};
export{LoginPage}