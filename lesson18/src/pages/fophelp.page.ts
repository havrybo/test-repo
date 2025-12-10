import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/header.component';

export class FopHelpPage {
    public readonly header: HeaderComponent;

    public constructor(private readonly page: Page) {
        this.header = new HeaderComponent(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/');
    }
}
