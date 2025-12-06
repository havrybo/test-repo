import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
    private readonly header: Locator;
    private readonly title: Locator;
    private readonly registerButton: Locator;
    private readonly loginButton: Locator;

    public constructor(private readonly page: Page) {
        this.header = page.locator('header.header');
        this.title = page.locator('h1.home-title');
        this.registerButton = page.locator('button.register-button');
        this.loginButton = page.locator('button.signin-button');
    }

    public async isVisible(): Promise<boolean> {
        return this.header.isVisible();
    }

    public async getTitleText(): Promise<string | null> {
        return this.title.textContent();
    }

    public async isRegisterButtonVisible(): Promise<boolean> {
        return this.registerButton.isVisible();
    }

    public async getRegisterButtonText(): Promise<string | null> {
        return this.registerButton.textContent();
    }

    public async isLoginButtonVisible(): Promise<boolean> {
        return this.loginButton.isVisible();
    }

    public async getLoginButtonText(): Promise<string | null> {
        return this.loginButton.textContent();
    }
}
