import { Then } from '@cucumber/cucumber';
import { expect } from 'playwright/test';
import { CustomWorld } from '../worlds/custom-world.ts';

Then('the page title should contain {string}', async function (this: CustomWorld, expectedTitle: string): Promise<void> {
    const title = await this.homePage.getTitle();
    expect(title).toContain(expectedTitle);
});

Then('I should see the text {string}', async function (this: CustomWorld, expectedText: string): Promise<void> {
    const body = this.homePage.getBodyLocator();
    await expect(body).toContainText(expectedText);
});

Then('I should see the section {string}', async function (this: CustomWorld, sectionName: string): Promise<void> {
    const isVisible = await this.homePage.isSectionVisible(sectionName);
    expect(isVisible).toBe(true);
});
