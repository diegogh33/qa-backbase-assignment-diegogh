import { Given } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import config from '../../playwright.config';
import fetch from 'node-fetch';

interface PetClinicWorld {
  page: Page;
}
interface OwnerData {
    firstName: string;
    lastName: string;
  }

const baseUrl = config.use?.baseURL || 'http://localhost:8080';

// Global variable to store petOwner name
let petOwner: string = '';

Given('a visit is added for owner with ID {int} and pet with ID {int} with date {string} and description {string}', async function (
  ownerId: number,
  petId: number,
  visitDate: string,
  description: string
) {
  // Step 1: Fetch owner details to get firstName and lastName
  const ownerResponse = await fetch(`${baseUrl}/owners/${ownerId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  
  expect(ownerResponse.ok, `Failed to fetch owner with ID ${ownerId}: ${ownerResponse.statusText}`).toBe(true);
  
  const ownerData = await ownerResponse.json() as OwnerData;
  petOwner = `${ownerData.firstName} ${ownerData.lastName}`; // Store globally
  console.log(`Pet Owner set to: ${petOwner}`); // Debug log

  // Step 2: Add the visit
  const visitResponse = await fetch(`${baseUrl}/owners/${ownerId}/pets/${petId}/visits`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      date: visitDate,
      description: description,
      petId: petId,
    }),
  });

  expect(visitResponse.ok, `Failed to add visit via API: ${visitResponse.statusText}`).toBe(true);
});

// Export petOwner for use in other files if needed
export { petOwner };
