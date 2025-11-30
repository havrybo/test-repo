import { ApiClient } from './api-client.js';

export class BaseService {
    protected readonly client: ApiClient;

    public constructor(client?: ApiClient) {
        this.client = client || new ApiClient();
    }
}
