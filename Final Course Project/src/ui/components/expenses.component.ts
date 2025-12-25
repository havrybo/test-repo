import { Page, Locator } from '@playwright/test';

export class ExpensesComponent {
    private readonly expensesPageLink: Locator;
    private readonly addFirstExpenseBtn: Locator;
    private readonly dateInput: Locator;
    private readonly currencySelect: Locator;
    private readonly amountInput: Locator;
    private readonly commentInput: Locator;
    private readonly submitBtn: Locator;

    public constructor(private readonly page: Page) {
        this.expensesPageLink = page.locator('a[href="/expenses"]');
        this.addFirstExpenseBtn = page.locator('button[class="add-button"]');
        this.dateInput = page.locator('#date');
        this.currencySelect = page.locator('#currency');
        this.amountInput = page.locator('#amount');
        this.commentInput = page.locator('#comment');
        this.submitBtn = page.locator('button[type="submit"].btn-primary');
    }

    public async gotoExpensesPage(): Promise<void> {
        await this.expensesPageLink.click();
    }

    public async openAddExpenseModal(): Promise<void> {
        await this.addFirstExpenseBtn.click();
    }

    public async fillExpenseForm(date: string, currency: string, amount: string, comment: string): Promise<void> {
        await this.dateInput.fill(date);
        await this.currencySelect.selectOption({ value: currency });
        await this.amountInput.fill(amount);
        await this.commentInput.fill(comment);
    }

    public async submitExpense(): Promise<void> {
        await this.submitBtn.click();
    }
    public async getAmount(): Promise<string> {
        return this.amountInput.inputValue();
    }
}
