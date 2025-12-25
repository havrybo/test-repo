import { test as base, expect } from '@playwright/test';
import { ApiClient, createApiClient } from '@api/client/api.client';
import { AuthApi } from '@api/endpoints/auth.api';
import { env } from '@config/env';

interface AuthFixtures {
    apiClient: ApiClient;
    authApi: AuthApi;
    token: string;
}

export const test = base.extend<AuthFixtures>({
    // eslint-disable-next-line no-empty-pattern
    apiClient: async ({ }, use) => {
        const context = await createApiClient();
        const client = new ApiClient(context);
        await use(client);
    },

    authApi: async ({ apiClient }, use) => {
        const authApi = new AuthApi(apiClient);
        await use(authApi);
    },

    token: async ({ authApi }, use) => {
        const loginResp = await authApi.login(env.auth.email, env.auth.password);
        const responseText = await loginResp.text();

        if (!loginResp.ok()) {
            console.error(`[Auth] Login failed with status ${loginResp.status()}: ${responseText}`);
            throw new Error(`Login failed: ${responseText}`);
        }

        const data = JSON.parse(responseText);
        expect(data.token).toBeTruthy();
        await use(data.token);
    }
});

export { expect };

