import { test, expect } from '@playwright/test';
import { FopHelpPage } from '../src/pages/fophelp.page';

test.describe('FopHELP main page', () => {
    let pageObject: FopHelpPage;

    test.beforeEach(async ({ page }) => {
        pageObject = new FopHelpPage(page);
        await pageObject.goto();
    });

    test('Header is visible', async () => {
        expect(await pageObject.header.isVisible()).toBeTruthy();
    });

    test('Navigation menu is visible', async () => {
        expect(await pageObject.header.isNavVisible()).toBeTruthy();
    });

    test('Page has a title and it is not empty', async () => {
        const text = await pageObject.header.getTitleText();
        expect(text).toBeTruthy();
        const lowerText = (text || '').toLowerCase();
        expect(lowerText).toContain('fop');
        expect(lowerText).toContain('help');
        expect(text?.trim()).toBe('Ласкаво просимо до FOP Help');
    });

    test('Register button is visible, enabled and has correct text', async () => {
        expect(await pageObject.header.isRegisterButtonVisible()).toBeTruthy();

        const text = await pageObject.header.getRegisterButtonText();
        expect(text?.trim()).toBe('Реєстрація');

        const isEnabled = await pageObject.header.registerButton.isEnabled();
        expect(isEnabled).toBeTruthy();
    });

    test('Login button is visible and has correct text', async () => {
        expect(await pageObject.header.isLoginButtonVisible()).toBeTruthy();

        const text = await pageObject.header.loginButton.textContent();
        expect(text?.trim()).toBe('Увійти');
    });
});
