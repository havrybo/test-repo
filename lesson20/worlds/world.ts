import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { Browser, BrowserContext, Page } from 'playwright';

export let browser: Browser;
export let context: BrowserContext;

export async function launchBrowser(): Promise<void> {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
}

export async function closeBrowser(): Promise<void> {
    if (context) await context.close();
    if (browser) await browser.close();
}

class CustomWorld {
    public page: Page | null = null;
    public baseUrl = 'https://hsrecruiting.com';

    public async openPage(): Promise<void> {
        this.page = await context.newPage();
    }

    public async closePage(): Promise<void> {
        if (this.page) {
            await this.page.close();
            this.page = null;
        }
    }

    public async navigateTo(path = '/'): Promise<void> {
        if (this.page) {
            await this.page.goto(`${this.baseUrl}${path}`, { timeout: 60000 });
        }
    }
}

setWorldConstructor(CustomWorld);
