import { After, Before, ITestCaseHookParameter, setWorldConstructor } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';
import config from '../playwright.config';

// Define the World interface
interface PetClinicWorld {
  page: Page;
}

class CustomWorld {
  page!: Page;
}

setWorldConstructor(CustomWorld);

let browser: Browser;

Before(async function (this: PetClinicWorld) {
  console.log('Launch Options from config:', config.use?.launchOptions);
  console.log('Headless from config:', config.use?.headless);

  // Use launch options from settings, with default values
  browser = await chromium.launch({
    headless: config.use?.headless ?? false, // false if not defined
    slowMo: config.use?.launchOptions?.slowMo ?? 0, // 0 if not defined
    args: config.use?.launchOptions?.args || [], // Pass the args
  });

  // Pass context options (such as viewport) from config
  const contextOptions = {
    viewport: config.use?.viewport ?? { width: 1280, height: 720 },
  };
  const context = await browser.newContext(contextOptions);
  this.page = await context.newPage();
});

After(async function (this: PetClinicWorld, testCase: ITestCaseHookParameter) {
  if (browser) {
    await browser.close();
  }
});
