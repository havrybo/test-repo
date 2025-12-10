import { When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

When('I click on the {string} link in the {string} section', async function (linkText: string, sectionName: string): Promise<void> {
    const section = this.page.locator(`h3:has-text("${sectionName}")`).locator('..');
    const link = section.getByRole('link', { name: linkText });
    await link.click();
    await this.page.waitForLoadState('networkidle');
});

When('I click on the logo', async function (): Promise<void> {
    const logo = this.page.locator('a[href="/"]').first();
    await logo.click();
    await this.page.waitForLoadState('networkidle');
});

Then('the URL should contain {string}', function (expectedPath: string): void {
    const currentUrl = this.page.url();
    expect(currentUrl).toContain(expectedPath);
});

Then('I should be on the homepage', function (): void {
    const currentUrl = this.page.url();
    expect(currentUrl).toMatch(/https:\/\/hsrecruiting\.com\/?$/);
});
