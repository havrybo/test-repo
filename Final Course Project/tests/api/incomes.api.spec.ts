import { test, expect } from '@api/fixtures/api.auth.fixture';
import { IncomeApi } from '@api/endpoints/incomes.api';
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

test('Create new income', async ({ apiClient, token }) => {
    const incomeApi = new IncomeApi(apiClient);
    const resp = await incomeApi.add({
        date: '2025-12-25',
        income: String(randomNumber()),
        currency: 'UAH',
        comment: 'Test income fixture',
        cash: false
    }, token);

    const data = await parseResponse(resp);
    expect(resp.ok(), `Expected 200 but got ${resp.status()}: ${JSON.stringify(data)}`).toBeTruthy();
    expect(data.status).toBe('Success');
});

test('Update income', async ({ apiClient, token }) => {
    const incomeApi = new IncomeApi(apiClient);
    const createResp = await incomeApi.add({
        date: '2025-12-25',
        income: String(randomNumber()),
        currency: 'UAH',
        comment: 'Income to update',
        cash: false
    }, token);

    expect(createResp.ok()).toBeTruthy();
    const createData = await parseResponse(createResp);
    expect(createData.status).toBe('Success');

    const incomeId = createData.message?.split(': ')[1] || createData.rawText?.match(/ID:\s*(\S+)/)?.[1] || '';
    expect(incomeId).toBeTruthy();

    const updateResp = await incomeApi.update({
        id: incomeId,
        date: '2025-12-25',
        income: String(randomNumber(2000, 5000)),
        currency: 'UAH',
        comment: 'Updated income',
        cash: false
    }, token);

    expect(updateResp.ok()).toBeTruthy();
    const data = await parseResponse(updateResp);
    expect(data.status).toBe('Success');
});

test('Delete income', async ({ apiClient, token }) => {
    const incomeApi = new IncomeApi(apiClient);
    const createResp = await incomeApi.add({
        date: '2025-12-25',
        income: String(randomNumber()),
        currency: 'UAH',
        comment: 'Income to delete',
        cash: false
    }, token);

    expect(createResp.ok()).toBeTruthy();
    const createData = await parseResponse(createResp);
    expect(createData.status).toBe('Success');

    const incomeId = createData.message?.split(': ')[1] || createData.rawText?.match(/ID:\s*(\S+)/)?.[1] || '';
    expect(incomeId).toBeTruthy();

    const deleteResp = await incomeApi.delete(incomeId, token);
    expect(deleteResp.ok()).toBeTruthy();
    const data = await parseResponse(deleteResp);
    expect(data.status).toBe('Success');
});
