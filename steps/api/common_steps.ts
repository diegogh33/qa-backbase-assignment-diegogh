import { Given } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import config from '../../playwright.config';


Given('The owner service is ready to use', async function () {
  this.apiContext = await request.newContext({ baseURL: process.env.BASE_URL || config.use?.baseURL });
  console.log('Owner service available at:', process.env.BASE_URL || config.use?.baseURL);
});
