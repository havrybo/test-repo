import { IncomeApi } from '@api/endpoints/incomes.api';
import { Income } from '@app-types/income.types';

import { APIResponse } from '@playwright/test';

export class IncomeService {
    private api: IncomeApi;

    public constructor(api: IncomeApi) {
        this.api = api;
    }

    public async addIncome(data: Income, token: string): Promise<APIResponse> {
        return this.api.add(data, token);
    }
}
