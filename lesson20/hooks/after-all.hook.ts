import { AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from '../worlds/custom-world.ts';

AfterAll(async function (): Promise<void> {
    console.log('🛑 Closing browser...');
    await CustomWorld.closeBrowser();
});
