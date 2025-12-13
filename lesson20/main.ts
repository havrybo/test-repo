import { setDefaultTimeout, setWorldConstructor } from '@cucumber/cucumber';
import { CustomWorld } from './worlds/custom-world.ts';

setDefaultTimeout(60 * 1000);
setWorldConstructor(CustomWorld);
