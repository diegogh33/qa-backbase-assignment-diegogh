import { Given, Then } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import config from '../../playwright.config';
import { expect } from '@playwright/test';


Given('the service is ready to use', async function () {
  this.apiContext = await request.newContext({ baseURL: process.env.BASE_URL || config.use?.baseURL });
});

Then('the operation is successful with status code {int}', async function (statusCode) {
  expect(this.response.status()).toBe(statusCode);
});
