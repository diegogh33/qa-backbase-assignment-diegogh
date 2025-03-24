import { When, Then } from '@cucumber/cucumber';
import * as fs from 'fs/promises';
import { expect } from '@playwright/test';


When('the user adds a pet owner using the data from {string}', async function (filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const body = JSON.parse(fileContent);
  console.log('Adding a pet owner with details:', body);
  this.response = await this.apiContext.post('/owners', {
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user retrieves the list of pet owners', async function () {
  console.log('Retrieving the list of pet owners');
  this.response = await this.apiContext.get('/owners');
  console.log('Result received:', this.response.status());
});

When('the user retrieves the details of the pet owner with ID {int}', async function (ownerId) {
  console.log('Retrieving details for pet owner ID:', ownerId);
  this.response = await this.apiContext.get(`/owners/${ownerId}`);
  console.log('Result received:', this.response.status());
});

When('the user updates the pet owner with ID {int} using the data from {string}', async function (ownerId, filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const body = JSON.parse(fileContent);
  console.log('Updating pet owner ID:', ownerId, 'with details:', body);
  this.response = await this.apiContext.put(`/owners/${ownerId}`, {
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user deletes the pet owner with ID {int}', async function (ownerId) {
  console.log('Deleting pet owner ID:', ownerId);
  this.response = await this.apiContext.delete(`/owners/${ownerId}`);
  console.log('Result received:', this.response.status());
});

When('the user looks up the pet owner with ID {int}', async function (ownerId) {
  console.log('Looking up pet owner with ID:', ownerId);
  this.response = await this.apiContext.get(`/owners/${ownerId}`);
  console.log('Result received:', this.response.status());
});

When('the user looks up the pet owner with ID {string}', async function (ownerId) {
  console.log('Looking up pet owner with ID:', ownerId);
  this.response = await this.apiContext.get(`/owners/${ownerId}`);
  console.log('Result received:', this.response.status());
});

When('the user looks up the pet owner with an empty ID', async function () {
  console.log('Looking up pet owner with an empty ID');
  this.response = await this.apiContext.get('/owners/'); 
  console.log('Result received:', this.response.status());
});

When('the user tries to add a pet owner with details from {string}', async function (filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const body = JSON.parse(fileContent);
  console.log('Trying to add a pet owner with details:', body);
  this.response = await this.apiContext.post('/owners', {
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user tries to add a pet owner without providing any details', async function () {
  console.log('Trying to add a pet owner without any details');
  this.response = await this.apiContext.post('/owners', {
    data: null,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user tries to update the pet owner with ID {int} using details from {string}', async function (ownerId, filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const body = JSON.parse(fileContent);
  console.log('Trying to update pet owner ID:', ownerId, 'with details:', body);
  this.response = await this.apiContext.put(`/owners/${ownerId}`, {
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user tries to update the pet owner with ID {string} using details from {string}', async function (ownerId, filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const body = JSON.parse(fileContent);
  console.log('Trying to update pet owner ID:', ownerId, 'with details:', body);
  this.response = await this.apiContext.put(`/owners/${ownerId}`, {
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user tries to update the pet owner with ID {int} without providing any details', async function (ownerId) {
  console.log('Trying to update pet owner ID:', ownerId, 'without any details');
  this.response = await this.apiContext.put(`/owners/${ownerId}`, {
    data: null,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

When('the user tries to update the pet owner with an empty ID using details from {string}', async function (filePath) {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const body = JSON.parse(fileContent);
  console.log('Trying to update pet owner with an empty ID using details:', body);
  this.response = await this.apiContext.put('/owners/', { 
    data: body,
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('Result received:', this.response.status());
});

Then('the operation fails with status code {int} because deletion is not supported', async function (statusCode) {
  const body = await this.response.json();
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
  expect(body.message).toBe("Request method 'DELETE' not supported");
});

Then('the response includes the details of the new pet owner named {string}', async function (firstName) {
  const body = await this.response.json();
  console.log('Response:', body);
  expect(body).toHaveProperty('id');
  expect(body.firstName).toBe(firstName);
  expect(body.lastName).toBe('Perez');
  expect(body.address).toBe('123 Main St');
  expect(body.city).toBe('Madrid');
  expect(body.telephone).toBe('912345678');
});

Then('the response contains a list of pet owners', async function () {
  const body = await this.response.json();
  console.log('Response:', body);
  expect(Array.isArray(body)).toBe(true);
});

Then('the response includes the details of the pet owner with ID {int}', async function (ownerId) {
  const body = await this.response.json();
  console.log('Response:', body);
  expect(body).toHaveProperty('id', ownerId);
  expect(body).toHaveProperty('firstName');
  expect(body).toHaveProperty('lastName');
  expect(body).toHaveProperty('address');
  expect(body).toHaveProperty('city');
  expect(body).toHaveProperty('telephone');
});

Then('the response includes the updated details of the pet owner named {string}', async function (firstName) {
  const body = await this.response.json();
  console.log('Response:', body);
  expect(body).toHaveProperty('id');
  expect(body.firstName).toBe(firstName);
  expect(body.lastName).toBe('Perez');
  expect(body.address).toBe('456 Elm St');
  expect(body.city).toBe('Barcelona');
  expect(body.telephone).toBe('934567890');
});

Then('the action fails with confirmation code {int} because the owner does not exist', async function (statusCode) {
  const body = await this.response.text(); // Usamos text() por si no hay JSON
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
});

Then('the action fails with confirmation code {int} because the ID is invalid', async function (statusCode) {
  const body = await this.response.text();
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
});

Then('the action fails with confirmation code {int} because the first name is missing', async function (statusCode) {
  const body = await this.response.text(); // Usamos text() por si no hay JSON
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
});

Then('the action fails with confirmation code {int} because the last name is missing', async function (statusCode) {
  const body = await this.response.text();
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
});

Then('the action fails with confirmation code {int} because no details were provided', async function (statusCode) {
  const body = await this.response.text();
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
});

Then('the action fails with confirmation code {int} because no ID was provided', async function (statusCode) {
  const body = await this.response.text();
  console.log('Response:', body);
  expect(this.response.status()).toBe(statusCode);
});

Then('the response indicates there is no owner with that id', async function () {
  const body = await this.response.json();
  expect(body.error).toBe('Internal Server Error');
  expect(body.message).toBe('No value present');
  expect(body).toHaveProperty('path');

});
