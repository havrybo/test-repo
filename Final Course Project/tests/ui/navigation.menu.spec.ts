import { test, expect } from '@playwright/test';
import { HomePage } from '@ui/pages/home.page';
import { ConfigService } from '@ui/services/config.service';

test.describe('FopHELP navigation menu', () => {
    let pageObject: HomePage;
    const config = new ConfigService();

    test.beforeEach(async ({ page }) => {
        pageObject = new HomePage(page, config);
        await pageObject.goto();
    });

    test('Navigation menu items are visible', async () => {
        await pageObject.navigationMenu.expectProfitsToBeVisible();
        await pageObject.navigationMenu.expectExpensesToBeVisible();
        await pageObject.navigationMenu.expectTaxesToBeVisible();
        await pageObject.navigationMenu.expectReportsToBeVisible();
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
