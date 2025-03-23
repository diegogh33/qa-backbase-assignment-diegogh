import {When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import fetch from 'node-fetch';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import Ajv from 'ajv';
import config from '../../playwright.config';

const ajv = new Ajv();
const baseUrl = config.use?.baseURL || 'http://localhost:8080';

When('the user requests the pet details for owner with ID {int} and pet with ID {int}', async function (
  this: any,
  ownerId: number,
  petId: number
) {
  const response = await fetch(`${baseUrl}/owners/${ownerId}/pets/${petId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  this.response = response;
  this.responseBody = await response.json();
});

When('the user adds a new pet for owner with ID {int} with the {string} details', async function (
  this: any,
  ownerId: number,
  bodyFile: string
) {
  const bodyPath = resolve(__dirname, '../../data', bodyFile);
  const body = JSON.parse(readFileSync(bodyPath, 'utf8'));
  const response = await fetch(`${baseUrl}/owners/${ownerId}/pets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  this.response = response;
  this.responseBody = await response.json();
});

When('the user updates the pet with ID {int} for owner with ID {int} with the {string} details', async function (
  this: any,
  petId: number,
  ownerId: number,
  bodyFile: string
) {
  const bodyPath = resolve(__dirname, '../../data', bodyFile);
  const body = JSON.parse(readFileSync(bodyPath, 'utf8'));
  const response = await fetch(`${baseUrl}/owners/${ownerId}/pets/${petId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  this.response = response;
});

Then('the response should match the pet schema', async function (this: any) {
  const schemaPath = resolve(__dirname, '../../helpers/schemas/pet_response_schema.json');
  const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  const valid = validate(this.responseBody);
  expect(valid, `Response does not match pet schema: ${JSON.stringify(validate.errors)}`).toBe(true);
});

Then('the response should match the created pet schema', async function (this: any) {
  const schemaPath = resolve(__dirname, '../../helpers/schemas/created_pet_response_schema.json');
  const schema = JSON.parse(readFileSync(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  const valid = validate(this.responseBody);
  expect(valid, `Response does not match created pet schema: ${JSON.stringify(validate.errors)}`).toBe(true);
});