import { test, expect } from '@playwright/test';
import { FopHelpPage } from '../src/pages/fophelp.page';

test.describe('FopHELP header', () => {
    let pageObject: FopHelpPage;

    test.beforeEach(async ({ page }) => {
        pageObject = new FopHelpPage(page);
        await pageObject.goto();
    });

    test('Header is visible', async () => {
        expect(await pageObject.header.isVisible()).toBeTruthy();
    });

    test('Title is correct', async () => {
        const text = await pageObject.header.getTitleText();
        expect(text?.trim()).toBe('Ласкаво просимо до FOP Help');
    });

    test('Register button is visible and correct', async () => {
        expect(await pageObject.header.isRegisterButtonVisible()).toBeTruthy();
        const text = await pageObject.header.getRegisterButtonText();
        expect(text?.trim()).toBe('Реєстрація');
    });

    test('Login button is visible and correct', async () => {
        expect(await pageObject.header.isLoginButtonVisible()).toBeTruthy();
        const text = await pageObject.header.getLoginButtonText();
        expect(text?.trim()).toBe('Увійти');
    });
});
