import { test, expect } from '@api/fixtures/api.auth.fixture';
import { ExpenseApi } from '@api/endpoints/expenses.api';
import { randomNumber } from '@utils/random.util';
import { APIResponse } from '@playwright/test';
import { ApiResponse } from '@app-types/api.response.types';

test.describe.configure({ mode: 'serial' });

async function parseResponse(resp: APIResponse): Promise<ApiResponse> {
    const text = await resp.text();
    console.log(`[API Response] Status: ${resp.status()}, Body: ${text}`);
    try {
        return JSON.parse(text);
    } catch {
        return { rawText: text, status: resp.ok() ? 'Success' : 'Failed' };
    }
}

test('Add new expense', async ({ apiClient, token }) => {
    const expenseApi = new ExpenseApi(apiClient);
    const resp = await expenseApi.add({
        date: '2025-12-25',
        expense: String(randomNumber()),
        currency: 'UAH',
        comment: 'Test expense fixture',
        cash: false
    }, token);

    const data = await parseResponse(resp);
    expect(resp.ok(), `Expected 200 but got ${resp.status()}: ${JSON.stringify(data)}`).toBeTruthy();
    expect(data.status).toBe('Success');
});
