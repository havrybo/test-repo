import { ReportsApi } from '@api/endpoints/reports.api';
import { Report } from '@app-types/report.types';

import { APIResponse } from '@playwright/test';

export class ReportService {
    private api: ReportsApi;

    public constructor(api: ReportsApi) {
        this.api = api;
    }

    public async getAllReports(token: string, pending?: boolean): Promise<APIResponse> {
        return this.api.getReports(token, pending);
    }

    public async generateReportDetails(report: Report, token: string): Promise<APIResponse> {
        return this.api.reportDetails(report, token);
    }

    public async submitReport(report: Report, token: string): Promise<APIResponse> {
        return this.api.saveReport(report, token);
    }
}
