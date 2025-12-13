import type { Page, Locator } from 'playwright';
import { BasePage } from './base.page.ts';

export class HomePage extends BasePage {
    private readonly mainHeading: Locator;
    private readonly forAthletesSection: Locator;
    private readonly forParentsSection: Locator;
    private readonly forCollegesSection: Locator;
    private readonly forCoachesSection: Locator;

    public constructor(page: Page) {
        super(page);
        this.mainHeading = page.getByRole('heading', { name: 'Get In The College Game' });
        this.forAthletesSection = page.locator('h3:has-text("For Athletes")');
        this.forParentsSection = page.locator('h3:has-text("For Parents")');
        this.forCollegesSection = page.locator('h3:has-text("For Colleges and Scouts")');
        this.forCoachesSection = page.locator('h3:has-text("For HS/Club Coaches")');
    }

    public async open(): Promise<void> {
        await this.navigateTo('/');
    }

    public async getMainHeadingText(): Promise<string> {
        return this.mainHeading.textContent() as Promise<string>;
    }

    public async isMainHeadingVisible(): Promise<boolean> {
        return this.mainHeading.isVisible();
    }

    public async isSectionVisible(sectionName: string): Promise<boolean> {
        const heading = this.page.getByRole('heading', { name: sectionName });
        return heading.isVisible();
    }

    public async clickReadMoreInSection(sectionName: string): Promise<void> {
        const section = this.page.locator(`h3:has-text("${sectionName}")`).locator('..');
        const link = section.getByRole('link', { name: 'Read More' });
        await link.click();
        await this.page.waitForLoadState('networkidle');
    }

    public async clickLogo(): Promise<void> {
        const logo = this.page.locator('a[href="/"]').first();
        await logo.click();
        await this.page.waitForLoadState('networkidle');
    }

    public getBodyLocator(): Locator {
        return this.page.locator('body');
    }
}
