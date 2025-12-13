import { When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../worlds/custom-world.ts';

When('I open the homepage', async function (this: CustomWorld): Promise<void> {
    await this.homePage.open();
});

When('I open the page {string}', async function (this: CustomWorld, path: string): Promise<void> {
    await this.navigateTo(path);
});

Then('the page should load successfully', function (this: CustomWorld): void {
    const url = this.homePage.getUrl();
    expect(url).toContain('hsrecruiting.com');
});
