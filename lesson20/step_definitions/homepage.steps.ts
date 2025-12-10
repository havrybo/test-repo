import { Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';

Then('the page title should contain {string}', async function (expectedTitle: string): Promise<void> {
    const title = await this.page.title();
    expect(title).toContain(expectedTitle);
});

Then('I should see the text {string}', async function (expectedText: string): Promise<void> {
    const body = this.page.locator('body');
    await expect(body).toContainText(expectedText);
});

Then('I should see the section {string}', async function (sectionName: string): Promise<void> {
    const heading = this.page.getByRole('heading', { name: sectionName });
    await expect(heading).toBeVisible();
});
