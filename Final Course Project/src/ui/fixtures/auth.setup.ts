import { test as setup } from '@playwright/test';
import { HomePage } from '@ui/pages/home.page';
import { LoginModal } from '@ui/components/login.modal';
import { ConfigService } from '@ui/services/config.service';
import * as fs from 'fs';

const storageStatePath = '.auth/storage-state.json';

setup('authenticate', async ({ page }) => {
    const config = new ConfigService();

    console.log('Authenticating in setup...');
    await page.goto(config.baseUrl);

    const homePage = new HomePage(page, config);
    await homePage.header.isLoginButtonVisible();

    await homePage.header.clickLoginButton();

    const loginModal = new LoginModal(page, config);
    await loginModal.login();

    await homePage.header.waitForUserProfile();
    console.log('Authentication successful. Saving storage state to:', storageStatePath);

    await page.context().storageState({ path: storageStatePath });

    if (fs.existsSync(storageStatePath)) {
        console.log('Storage state file successfully created.');
    } else {
        console.error('Storage state file was NOT created!');
    }
});
