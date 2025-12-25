import { ApiClient } from '@api/client/api.client';
import { APIResponse } from '@playwright/test';

export class AuthApi {
    private client: ApiClient;

    public constructor(client: ApiClient) {
        this.client = client;
    }

    public async login(username: string, password: string): Promise<APIResponse> {
        return this.client.post('react/authenticate/login', { username, password });
    }

    public async register(data: unknown): Promise<APIResponse> {
        return this.client.post('react/authenticate/register', data);
    }

    public async logout(token: string): Promise<APIResponse> {
        return this.client.get('react/authenticate/logout', token);
    }
}

