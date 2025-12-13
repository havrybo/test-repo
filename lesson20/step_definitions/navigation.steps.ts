import { When, Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../worlds/custom-world.ts';

When('I click on the {string} link in the {string} section', async function (this: CustomWorld, linkText: string, sectionName: string): Promise<void> {
    await this.homePage.clickReadMoreInSection(sectionName);
});

When('I click on the logo', async function (this: CustomWorld): Promise<void> {
    await this.homePage.clickLogo();
});

Then('the URL should contain {string}', function (this: CustomWorld, expectedPath: string): void {
    const currentUrl = this.homePage.getUrl();
    expect(currentUrl).toContain(expectedPath);
});

Then('I should be on the homepage', function (this: CustomWorld): void {
    const currentUrl = this.homePage.getUrl();
    expect(currentUrl).toMatch(/https:\/\/hsrecruiting\.com\/?$/);
});
