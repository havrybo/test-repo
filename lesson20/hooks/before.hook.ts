import { Before } from '@cucumber/cucumber';

Before(async function (): Promise<void> {
    await this.openPage();
});
