import { test, expect } from '@api/fixtures/api.auth.fixture';
import { ReportsApi } from '@api/endpoints/reports.api';

test.describe.configure({ mode: 'serial' });

test('Get reports', async ({ apiClient, token }) => {
    const reportsApi = new ReportsApi(apiClient);
    const resp = await reportsApi.getReports(token);
    const text = await resp.text();
    console.log(`[Get Reports] Status: ${resp.status()}, Body: ${text}`);

    if (resp.ok()) {
        const data = JSON.parse(text);
        expect(data).toBeTruthy();
    } else {
        expect(text).toContain('Cant find');
    }
});

