import { AfterAll } from '@cucumber/cucumber';
import { closeBrowser } from '../worlds/world.js';

AfterAll(async function (): Promise<void> {
    console.log('🛑 Closing browser...');
    await closeBrowser();
});
