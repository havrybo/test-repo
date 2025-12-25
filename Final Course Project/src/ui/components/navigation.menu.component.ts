import { Page, Locator, expect } from '@playwright/test';

export class NavigationMenuComponent {
    private readonly menu: Locator;

    private readonly profits: Locator;
    private readonly expenses: Locator;
    private readonly taxes: Locator;
    private readonly reports: Locator;

    private readonly taxesAll: Locator;
    private readonly taxesUnpaid: Locator;
    private readonly taxesPaid: Locator;

    private readonly reportsAll: Locator;
    private readonly reportsCurrent: Locator;
    private readonly reportsSubmitted: Locator;

    public constructor(private readonly page: Page) {

        this.menu = page.locator('nav.main-navigation');

        this.profits = this.menu.locator('a:has-text("Прибутки")');
        this.expenses = this.menu.locator('a:has-text("Витрати")');
        this.taxes = this.menu.locator('button:has-text("Податки")');
        this.reports = this.menu.locator('button:has-text("Звіти")');

        this.taxesAll = this.menu.locator('button:has-text("Податки") + div.dropdown-menu a[href="/taxes/all"]');
        this.taxesUnpaid = this.menu.locator('button:has-text("Податки") + div.dropdown-menu a[href="/taxes/pending"]');
        this.taxesPaid = this.menu.locator('button:has-text("Податки") + div.dropdown-menu a[href="/taxes/paid"]');

        this.reportsAll = this.menu.locator('button:has-text("Звіти") + div.dropdown-menu a[href="/reports/all"]');
        this.reportsCurrent = this.menu.locator('button:has-text("Звіти") + div.dropdown-menu a[href="/reports/current"]');
        this.reportsSubmitted = this.menu.locator('button:has-text("Звіти") + div.dropdown-menu a[href="/reports/submitted"]');
    }

    public async expectProfitsToBeVisible(): Promise<void> {
        await expect(this.profits).toBeVisible();
    }

    public async expectExpensesToBeVisible(): Promise<void> {
        await expect(this.expenses).toBeVisible();
    }

    public async expectTaxesToBeVisible(): Promise<void> {
        await expect(this.taxes).toBeVisible();
    }

    public async expectReportsToBeVisible(): Promise<void> {
        await expect(this.reports).toBeVisible();
    }

    public async openTaxesDropdown(): Promise<void> {
        await this.taxes.click();
    }

    public async openReportsDropdown(): Promise<void> {
        await this.reports.click();
    }

    public async getTaxesOptionsText(): Promise<string[]> {
        return [
            (await this.taxesAll.textContent())?.trim() || '',
            (await this.taxesUnpaid.textContent())?.trim() || '',
            (await this.taxesPaid.textContent())?.trim() || ''
        ];
    }

    public async getReportsOptionsText(): Promise<string[]> {
        return [
            (await this.reportsAll.textContent())?.trim() || '',
            (await this.reportsCurrent.textContent())?.trim() || '',
            (await this.reportsSubmitted.textContent())?.trim() || ''
        ];
    }
}
