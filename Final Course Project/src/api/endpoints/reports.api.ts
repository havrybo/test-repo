import { ApiClient } from '@api/client/api.client';
import { Report } from '@app-types/report.types';
import { APIResponse } from '@playwright/test';

export class ReportsApi {
    private client: ApiClient;

    public constructor(client: ApiClient) {
        this.client = client;
    }

    public async getReports(token: string, pending?: boolean): Promise<APIResponse> {
        const query = pending !== undefined ? `?pending=${pending}` : '';
        return this.client.get(`v2/reports${query}`, token);
    }

    public async reportDetails(report: Report, token: string): Promise<APIResponse> {
        return this.client.post('v2/reports/details', report, token);
    }

    public async saveReport(report: Report, token: string): Promise<APIResponse> {
        return this.client.post('v2/reports/save', report, token);
    }
}

