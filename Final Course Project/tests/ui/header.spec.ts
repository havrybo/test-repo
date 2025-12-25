import { test, expect } from '@playwright/test';
import { HomePage } from '@ui/pages/home.page';
import { ConfigService } from '@ui/services/config.service';

test.describe('FopHELP header', () => {
    let pageObject: HomePage;
    const config = new ConfigService();

    test.use({ storageState: { cookies: [], origins: [] } });

    test.beforeEach(async ({ page }) => {
        pageObject = new HomePage(page, config);
        await pageObject.goto();
    });

    test('Header is visible', async () => {
        expect(await pageObject.header.isHeaderVisible()).toBeTruthy();
    });

    test('Title is correct', async () => {
        const text = await pageObject.header.getTitleText();
        await expect(text?.trim()).toBe('Ласкаво просимо до FOP Help');
    });

    test('Register button is visible and correct', async () => {
        expect(await pageObject.header.isRegisterButtonVisible()).toBeTruthy();
        const text = await pageObject.header.getRegisterButtonText();
        await expect(text?.trim()).toBe('Реєстрація');
    });

    test('Login button is visible and correct', async () => {
        expect(await pageObject.header.isLoginButtonVisible()).toBeTruthy();
        const text = await pageObject.header.getLoginButtonText();
        await expect(text?.trim()).toBe('Увійти');
    });
});
