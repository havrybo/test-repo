import { request, APIRequestContext, APIResponse } from '@playwright/test';
import { env } from '@config/env';

export class ApiClient {
    private context: APIRequestContext;

    public constructor(context: APIRequestContext) {
        this.context = context;
    }

    public async get(url: string, token?: string): Promise<APIResponse> {
        console.log(`[API] GET ${url}`);
        const response = await this.context.get(url, {
            headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
        console.log(`[API] Response status: ${response.status()}`);
        return response;
    }

    public async post(url: string, data?: unknown, token?: string): Promise<APIResponse> {
        console.log(`[API] POST ${url}`);
        const response = await this.context.post(url, {
            data,
            headers: token ? { Authorization: `Bearer ${token}` } : {}
        });
        console.log(`[API] Response status: ${response.status()}`);
        return response;
    }
}

export async function createApiClient(): Promise<APIRequestContext> {
    const baseUrl = env.baseUrl.endsWith('/') ? env.baseUrl.slice(0, -1) : env.baseUrl;
    const apiBaseUrl = `${baseUrl}/api/`;
    console.log(`[API] Creating client with baseURL: ${apiBaseUrl}`);
    return await request.newContext({
        baseURL: apiBaseUrl
    });
}

