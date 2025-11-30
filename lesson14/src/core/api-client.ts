import { Logger } from '../helpers/logger.js';

export class ApiClient {
    private readonly timeout: number;

    public constructor(timeout = 5000) {
        this.timeout = timeout;
    }

    public async get<T>(url: string, retries = 2): Promise<T> {
        for (let attempt = 0; attempt <= retries; attempt++) {
            try {
                Logger.logRequest(url);
                const controller = new AbortController();
                const id = setTimeout(() => controller.abort(), this.timeout);

                const response: Response = await fetch(url, { signal: controller.signal });
                clearTimeout(id);

                const data: T = await response.json();
                Logger.logResponse(url, response.status, data);

                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                return data;
            } catch (err) {
                Logger.logError(url, err);
                if (attempt === retries) throw err;
            }
        }

        throw new Error('Max retries exceeded');
    }
}
