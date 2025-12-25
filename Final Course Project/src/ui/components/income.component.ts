import { Page, Locator } from '@playwright/test';

export class IncomeComponent {
    private readonly incomePageLink: Locator;
    private readonly addFirstIncomeBtn: Locator;
    private readonly dateInput: Locator;
    private readonly currencySelect: Locator;
    private readonly amountInput: Locator;
    private readonly commentInput: Locator;
    private readonly submitBtn: Locator;

    public constructor(private readonly page: Page) {
        this.incomePageLink = page.locator('a[href="/incomes"]');
        this.addFirstIncomeBtn = page.locator('button[class="add-button"]');
        this.dateInput = page.locator('#date');
        this.currencySelect = page.locator('#currency');
        this.amountInput = page.locator('#amount');
        this.commentInput = page.locator('#comment');
        this.submitBtn = page.locator('button[type="submit"].btn-primary');
    }

    public async gotoIncomePage(): Promise<void> {
        await this.incomePageLink.click();
    }

    public async openAddIncomeModal(): Promise<void> {
        await this.addFirstIncomeBtn.click();
    }

    public async fillIncomeForm(date: string, currency: string, amount: string, comment: string): Promise<void> {
        await this.dateInput.fill(date);
        await this.currencySelect.selectOption({ value: currency });
        await this.amountInput.fill(amount);
        await this.commentInput.fill(comment);
    }

    public async submitIncome(): Promise<void> {
        await this.submitBtn.click();
    }

    public async getAmount(): Promise<string> {
        return this.amountInput.inputValue();
    }
}
