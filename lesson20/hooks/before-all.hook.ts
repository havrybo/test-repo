import { BeforeAll } from '@cucumber/cucumber';
import { launchBrowser } from '../worlds/world.js';

BeforeAll(async function (): Promise<void> {
    console.log('🚀 Launching browser...');
    await launchBrowser();
});
