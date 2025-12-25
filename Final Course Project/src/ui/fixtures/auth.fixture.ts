import { test as base } from '@playwright/test';
import { HomePage } from '@ui/pages/home.page';
import { ConfigService } from '@ui/services/config.service';

interface AuthFixture {
    homePage: HomePage;
    configService: ConfigService;
}

const storageStatePath = '.auth/storage-state.json';

export const test = base.extend<AuthFixture>({
    configService: async ({ page: _ }, use) => {
        const configService = new ConfigService();
        await use(configService);
    },

    homePage: async ({ browser, configService }, use) => {

        const context = await browser.newContext({
            storageState: storageStatePath
        });
        const page = await context.newPage();
        const homePage = new HomePage(page, configService);

        await homePage.goto();

        try {
            await homePage.header.waitForUserProfile();
        } catch {
            console.error('Fixture Error: User is not logged in. Did setup project run?');
        }

        await use(homePage);

        await context.close();
    }
});
