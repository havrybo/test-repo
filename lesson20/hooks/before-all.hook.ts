import { BeforeAll } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/custom-world.ts';

BeforeAll(async function (): Promise<void> {
    console.log('🚀 Launching browser...');
    await CustomWorld.launchBrowser();
});
