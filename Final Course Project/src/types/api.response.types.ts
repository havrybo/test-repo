export interface ApiResponse {
    status: string;
    message?: string;
    rawText?: string;
    [key: string]: unknown;
}
