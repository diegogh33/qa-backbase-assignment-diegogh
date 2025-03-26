import { Given } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import config from '../../playwright.config';

interface PetClinicWorld {
  page: Page;
}

const baseUrl = config.use?.baseURL || 'http://localhost:8080';

Given('the PetClinic application is open', async function (this: PetClinicWorld) {
  await this.page.goto(baseUrl);
  await expect(this.page).toHaveTitle(/PetClinic/);
});
