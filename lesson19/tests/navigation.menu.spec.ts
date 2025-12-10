import { test, expect } from '@playwright/test';
import { FopHelpPage } from '../src/pages/fophelp.page';

test.describe('FopHELP navigation menu', () => {
    let pageObject: FopHelpPage;

    test.beforeEach(async ({ page }) => {
        pageObject = new FopHelpPage(page);
        await pageObject.goto();
    });

    test('Main menu items are visible', async () => {
        expect(await pageObject.navigationMenu.isProfitsVisible()).toBeTruthy();
        expect(await pageObject.navigationMenu.isExpensesVisible()).toBeTruthy();
        expect(await pageObject.navigationMenu.isTaxesVisible()).toBeTruthy();
        expect(await pageObject.navigationMenu.isReportsVisible()).toBeTruthy();
    });

    test('Taxes dropdown has correct options', async () => {
        await pageObject.navigationMenu.openTaxesDropdown();
        const options = await pageObject.navigationMenu.getTaxesOptionsText();
        expect(options).toEqual(['Усі', 'Несплачені', 'Сплачені']);
    });

    test('Reports dropdown has correct options', async () => {
        await pageObject.navigationMenu.openReportsDropdown();
        const options = await pageObject.navigationMenu.getReportsOptionsText();
        expect(options).toEqual(['Усі', 'Поточні', 'Подані']);
    });
});
