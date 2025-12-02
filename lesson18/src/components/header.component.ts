import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
    private readonly header: Locator;
    private readonly navMenu: Locator;
    private readonly title: Locator;
    public readonly registerButton: Locator;
    public readonly loginButton: Locator;

    public constructor(private readonly page: Page) {
        this.header = page.locator('header.header');
        this.navMenu = page.locator('nav.main-navigation');
        this.title = page.locator('h1.home-title');
        this.registerButton = page.locator('button.register-button');
        this.loginButton = page.locator('button.signin-button');
    }

    public async isVisible(): Promise<boolean> {
        return this.header.isVisible();
    }

    public async isNavVisible(): Promise<boolean> {
        return this.navMenu.isVisible();
    }

    public async getTitleText(): Promise<string | null> {
        return this.title.textContent();
    }

    public async isRegisterButtonVisible(): Promise<boolean> {
        return this.registerButton.isVisible();
    }

    public async isLoginButtonVisible(): Promise<boolean> {
        return this.loginButton.isVisible();
    }

    public async getRegisterButtonText(): Promise<string | null> {
        return this.registerButton.textContent();
    }
}
