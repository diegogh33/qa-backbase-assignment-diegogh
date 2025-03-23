import { When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { visitLocators } from '../../helpers/visit_locators';
import { ownerLocators } from '../../helpers/owner_locators';
import { urls } from '../../config/urls';
import { petOwner } from '../api/visit_steps'; // Import petOwner

interface PetClinicWorld {
  page: Page;
}

When('the user navigates to the visits for owner with ID {int}', async function (
  this: PetClinicWorld,
  ownerId: number
) {
  // Navigate to the owner's details page using urls.owners and ownerId
  await this.page.goto(`${urls.ownersDetails}/${ownerId}`);
  
  // Wait for and verify the Owner Information page
  await this.page.waitForSelector(ownerLocators.ownerInfoTitle);
  const titleText = await this.page.textContent(ownerLocators.ownerInfoTitle);
  expect(titleText).toBe('Owner Information');

  // Verify the owner's name matches petOwner (optional validation)
  const ownerNameElement = await this.page.textContent(ownerLocators.ownerName); // Adjust locator if needed
  expect(ownerNameElement).toContain(petOwner);

  // Wait for the visits table
  await this.page.waitForSelector(visitLocators.petVisitsTable);
});

Then('the user sees a visit with date {string} and description {string} in the visits list', async function (
  this: PetClinicWorld,
  visitDate: string,
  description: string
) {
  const dateCells = await this.page.locator(visitLocators.visitDateColumn).allTextContents();
  const descCells = await this.page.locator(visitLocators.visitDescriptionColumn).allTextContents();

  const visitFound = dateCells.some((date, index) => {
    const trimmedDate = date.trim();
    const trimmedDesc = descCells[index]?.trim();
    return trimmedDate === visitDate && trimmedDesc === description;
  });

  expect(visitFound, `Visit with date "${visitDate}" and description "${description}" should be listed`).toBe(true);
});

When('the user adds a new visit with date {string} and description {string}', async function (
  this: PetClinicWorld,
  visitDate: string,
  description: string
) {
  await this.page.click(visitLocators.addVisitButton);

  //Adding date and description
  const [day, month, year] = visitDate.split("/");
  const formattedDate = `${year}-${month}-${day}`;
  await this.page.fill(visitLocators.visitDateInput, formattedDate);
  await this.page.fill(visitLocators.visitDescriptionInput, description);

  await this.page.click(visitLocators.addNewVisitButton);
  
  // Verify Owner Information is displayed
  await this.page.waitForSelector(ownerLocators.ownerInfoTitle);
});