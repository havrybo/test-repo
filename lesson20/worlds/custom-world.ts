import { World, IWorldOptions } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import type { Browser, BrowserContext, Page } from 'playwright';
import { HomePage } from '../pages/home.page.ts';

// Shared browser instance for all scenarios
let sharedBrowser: Browser | null = null;

export class CustomWorld extends World {
    public context: BrowserContext | null = null;
    public page: Page | null = null;
    public baseUrl = 'https://hsrecruiting.com';
    public homePage!: HomePage;

    public constructor(options: IWorldOptions) {
        super(options);
    }

    public static async launchBrowser(): Promise<void> {
        if (!sharedBrowser) {
            sharedBrowser = await chromium.launch({ headless: true });
        }
    }

    public static async closeBrowser(): Promise<void> {
        if (sharedBrowser) {
            await sharedBrowser.close();
            sharedBrowser = null;
        }
    }

    public async openPage(): Promise<void> {
        if (!sharedBrowser) {
            await CustomWorld.launchBrowser();
        }
        this.context = await sharedBrowser!.newContext();
        this.page = await this.context.newPage();
        this.homePage = new HomePage(this.page);
    }

    public async closePage(): Promise<void> {
        if (this.page) {
            await this.page.close();
            this.page = null;
        }
        if (this.context) {
            await this.context.close();
            this.context = null;
        }
    }

    public async navigateTo(path = '/'): Promise<void> {
        if (this.page) {
            await this.page.goto(`${this.baseUrl}${path}`, { timeout: 60000, waitUntil: 'domcontentloaded' });
        }
    }
}
