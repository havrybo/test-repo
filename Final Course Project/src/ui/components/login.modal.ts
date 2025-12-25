import { Page, expect } from '@playwright/test';
import { ConfigService } from '@ui/services/config.service';

export class LoginModal {
    public constructor(
        private page: Page,
        private config: ConfigService
    ) { }

    public emailInput = this.page.locator('#login-email');
    public passwordInput = this.page.locator('#login-password');
    public submitButton = this.page.locator('button[type="submit"]');
    public profileIcon = this.page.locator('span.role-icon.users');

    public async login(): Promise<void> {
        await this.emailInput.fill(this.config.email);
        await this.passwordInput.fill(this.config.password);
        await this.submitButton.click();
        await expect(this.profileIcon).toBeVisible();
    }
}
