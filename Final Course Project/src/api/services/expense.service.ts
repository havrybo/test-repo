import { ExpenseApi } from '@api/endpoints/expenses.api';
import { Expense } from '@app-types/expense.types';

import { APIResponse } from '@playwright/test';

export class ExpenseService {
    private api: ExpenseApi;

    public constructor(api: ExpenseApi) {
        this.api = api;
    }

    public async addExpense(data: Expense, token: string): Promise<APIResponse> {
        return this.api.add(data, token);
    }
}
