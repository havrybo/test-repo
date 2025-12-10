import { Page, Locator } from '@playwright/test';

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
        // Контейнер меню
        this.menu = page.locator('nav.main-navigation');

        // Основні пункти меню
        this.profits  = this.menu.locator('a:has-text("Прибутки")');
        this.expenses = this.menu.locator('a:has-text("Витрати")');
        this.taxes    = this.menu.locator('button:has-text("Податки")');
        this.reports  = this.menu.locator('button:has-text("Звіти")');

        // Подменю "Податки"
        this.taxesAll    = this.menu.locator('button:has-text("Податки") + div.dropdown-menu a[href="/taxes/all"]');
        this.taxesUnpaid = this.menu.locator('button:has-text("Податки") + div.dropdown-menu a[href="/taxes/pending"]');
        this.taxesPaid   = this.menu.locator('button:has-text("Податки") + div.dropdown-menu a[href="/taxes/paid"]');

        // Подменю "Звіти"
        this.reportsAll       = this.menu.locator('button:has-text("Звіти") + div.dropdown-menu a[href="/reports/all"]');
        this.reportsCurrent   = this.menu.locator('button:has-text("Звіти") + div.dropdown-menu a[href="/reports/current"]');
        this.reportsSubmitted = this.menu.locator('button:has-text("Звіти") + div.dropdown-menu a[href="/reports/submitted"]');
    }

    // ——— Публічні API методи ———
    public async isProfitsVisible(): Promise<boolean> {
        return this.profits.isVisible();
    }

    public async isExpensesVisible(): Promise<boolean> {
        return this.expenses.isVisible();
    }

    public async isTaxesVisible(): Promise<boolean> {
        return this.taxes.isVisible();
    }

    public async isReportsVisible(): Promise<boolean> {
        return this.reports.isVisible();
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
