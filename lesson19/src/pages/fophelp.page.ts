import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/header.component';
import { NavigationMenuComponent } from '../components/navigation.menu.component';

export class FopHelpPage {
    public readonly header: HeaderComponent;
    public readonly navigationMenu: NavigationMenuComponent;

    public constructor(private readonly page: Page) {
        this.header = new HeaderComponent(page);
        this.navigationMenu = new NavigationMenuComponent(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://new.fophelp.pro/');
    }
}
