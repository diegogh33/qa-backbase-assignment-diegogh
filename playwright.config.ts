import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:8080',
    headless: true, // Browser visible
    viewport: { width: 1840, height: 1440 },  // Set to null to use browser's default/maximized size or something like { width: 1280, height: 720 },
    navigationTimeout: 17000,
    launchOptions: {
      slowMo: 500, // Optional: slows down operations
      // args: ['--start-maximized'], // Chromium arg to start maximized
    }
  },
  retries: 1,
  timeout: 26000,
};

export default config;