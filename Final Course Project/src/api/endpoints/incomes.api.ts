import { ApiClient } from '@api/client/api.client';
import { APIResponse } from '@playwright/test';
import { Income } from '@app-types/income.types';

export class IncomeApi {
    private client: ApiClient;

    public constructor(client: ApiClient) {
        this.client = client;
    }

    public async getAll(token: string): Promise<APIResponse> {
        return this.client.get('v2/incomes', token);
    }

    public async add(data: Income, token: string): Promise<APIResponse> {
        return this.client.post('v2/incomes/add', data, token);
    }

    public async update(data: Income, token: string): Promise<APIResponse> {
        return this.client.post('v2/incomes/update', data, token);
    }

    public async delete(id: string, token: string): Promise<APIResponse> {
        return this.client.post('v2/incomes/delete', { id }, token);
    }
}

