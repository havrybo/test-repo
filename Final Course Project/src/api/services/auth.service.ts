import { AuthApi } from '@api/endpoints/auth.api';

export class AuthService {
    private api: AuthApi;

    public constructor(api: AuthApi) {
        this.api = api;
    }

    public async login(username: string, password: string): Promise<string> {
        const response = await this.api.login(username, password);
        const data = await response.json();
        return data.token;
    }
}
