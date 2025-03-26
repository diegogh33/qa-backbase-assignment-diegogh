import { Given } from '@cucumber/cucumber';
import { expect, Page, APIResponse, request } from '@playwright/test';
import config from '../../playwright.config';

interface PetClinicWorld {
  page: Page;
  apiContext: any; 
  response?: APIResponse;
}

interface OwnerData {
  firstName: string;
  lastName: string;
}

// Global variable to store petOwner name
let petOwner: string = '';

Given(
  'a visit is added for owner with ID {int} and pet with ID {int} with date {string} and description {string}',
  async function (
    this: PetClinicWorld,
    ownerId: number,
    petId: number,
    visitDate: string,
    description: string
  ) {
    // Initial step
    this.apiContext = await request.newContext({ baseURL: process.env.BASE_URL || config.use?.baseURL });

    // Step 1: Get owner details
    const ownerResponse = await this.apiContext.get(`/owners/${ownerId}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    expect(ownerResponse.ok(), `Failed to get owner with ID ${ownerId}: ${ownerResponse.statusText()}`).toBe(true);

    const ownerData = (await ownerResponse.json()) as OwnerData;
    petOwner = `${ownerData.firstName} ${ownerData.lastName}`;
    console.log(`Pet Owner set to: ${petOwner}`);

    // Step 2: Add the visit
    const visitResponse = await this.apiContext.post(`/owners/${ownerId}/pets/${petId}/visits`, {
      headers: { 'Content-Type': 'application/json' },
      data: {
        date: visitDate,
        description: description,
        petId: petId,
      },
    });

    expect(visitResponse.ok(), `Failed to add visit via API: ${visitResponse.statusText()}`).toBe(true);

    this.response = visitResponse; 
  }
);

export { petOwner };
