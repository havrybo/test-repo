import type { Page } from 'playwright';

export class BasePage {
    protected readonly page: Page;
    protected readonly baseUrl = 'https://hsrecruiting.com';

    public constructor(page: Page) {
        this.page = page;
    }

    public async navigateTo(path = '/'): Promise<void> {
        await this.page.goto(`${this.baseUrl}${path}`, { timeout: 60000, waitUntil: 'domcontentloaded' });
    }

    public getUrl(): string {
        return this.page.url();
    }

    public async getTitle(): Promise<string> {
        return this.page.title();
    }
}
