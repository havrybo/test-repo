import { ApiClient } from '@api/client/api.client';
import { APIResponse } from '@playwright/test';
import { Expense } from '@app-types/expense.types';

export class ExpenseApi {
    private client: ApiClient;

    public constructor(client: ApiClient) {
        this.client = client;
    }

    public async getAll(token: string): Promise<APIResponse> {
        return this.client.get('v2/expenses', token);
    }

    public async add(data: Expense, token: string): Promise<APIResponse> {
        return this.client.post('v2/expenses/add', data, token);
    }

    public async update(data: Expense, token: string): Promise<APIResponse> {
        return this.client.post('v2/expenses/update', data, token);
    }

    public async delete(id: string, token: string): Promise<APIResponse> {
        return this.client.post('v2/expenses/delete', { id }, token);
    }
}

