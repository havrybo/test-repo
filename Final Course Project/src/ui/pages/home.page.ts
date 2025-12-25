import { Page } from '@playwright/test';
import { HeaderComponent } from '@ui/components/header.component';
import { NavigationMenuComponent } from '@ui/components/navigation.menu.component';
import { IncomeComponent } from '@ui/components/income.component';
import { ExpensesComponent } from '@ui/components/expenses.component';
import { ConfigService } from '@ui/services/config.service';

export class HomePage {
    public readonly header: HeaderComponent;
    public readonly navigationMenu: NavigationMenuComponent;
    public readonly income: IncomeComponent;
    public readonly expenses: ExpensesComponent;

    public constructor(private readonly page: Page, private readonly config: ConfigService) {
        this.header = new HeaderComponent(page);
        this.navigationMenu = new NavigationMenuComponent(page);
        this.income = new IncomeComponent(page);
        this.expenses = new ExpensesComponent(page);
    }

    public async goto(): Promise<void> {
        await this.page.goto(this.config.baseUrl);
    }
}
