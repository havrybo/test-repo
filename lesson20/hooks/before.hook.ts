import { Before } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/custom-world.ts';

Before(async function (this: CustomWorld): Promise<void> {
    await this.openPage();
});
