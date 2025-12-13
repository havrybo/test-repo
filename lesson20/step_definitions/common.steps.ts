import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

setDefaultTimeout(60 * 1000);

When('I open the homepage', async function (): Promise<void> {
    await this.navigateTo('/');
});

When('I open the page {string}', async function (path: string): Promise<void> {
    await this.navigateTo(path);
});

Then('the page should load successfully', function (): void {
    const response = this.page.url();
    expect(response).toContain('hsrecruiting.com');
});
