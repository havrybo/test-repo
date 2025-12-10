import { After, Status, ITestCaseHookParameter } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';

After(async function (scenario: ITestCaseHookParameter): Promise<void> {

    if (scenario.result?.status === Status.FAILED && this.page) {
        const screenshotDir = 'reports/screenshots';
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }

        const screenshotPath = path.join(
            screenshotDir,
            `${scenario.pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`
        );

        await this.page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`📸 Screenshot saved: ${screenshotPath}`);
    }

    await this.closePage();
});
