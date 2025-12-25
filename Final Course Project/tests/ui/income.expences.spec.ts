import { test } from '@ui/fixtures/auth.fixture';
import { expect } from '@playwright/test';

test.describe('Income & Expenses', () => {
    test('Add first income', async ({ homePage }) => {
        await homePage.income.gotoIncomePage();
        await homePage.income.openAddIncomeModal();
        await homePage.income.fillIncomeForm('2025-12-24', 'UAH', '1000', 'Test income');
        await homePage.income.submitIncome();

        const lastIncomeAmount = await homePage.income.getAmount();
        expect(lastIncomeAmount).toBe('1000');
    });

    test('Add first expense', async ({ homePage }) => {
        await homePage.expenses.gotoExpensesPage();
        await homePage.expenses.openAddExpenseModal();
        await homePage.expenses.fillExpenseForm('2025-12-24', 'USD', '200', 'Test expense');
        await homePage.expenses.submitExpense();

        const lastExpenseAmount = await homePage.expenses.getAmount();
        expect(lastExpenseAmount).toBe('200');
    });
});
