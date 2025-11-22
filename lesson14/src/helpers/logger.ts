export class Logger {
    public static logRequest(url: string, options?: RequestInit): void {
        console.log(`[REQUEST] ${url}`, options || '');
    }

    public static logResponse(url: string, status: number, data: unknown): void {
        console.log(`[RESPONSE] ${url} - Status: ${status}`, data);
    }

    public static logError(url: string, error: unknown): void {
        console.error(`[ERROR] ${url}`, error);
    }
}

