import { When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { ownerLocators } from '../../helpers/locators/owner_locators';
import { petLocators } from '../../helpers/locators/pet_locators';

interface PetClinicWorld {
  page: Page;
}

When('the user adds a pet named {string} with type {string} and birth date {string}', async function (
  this: PetClinicWorld, 
  petName: string, 
  petType: string, 
  birthDate: string
) {
  await this.page.click(ownerLocators.addPetButton);
  await this.page.fill(petLocators.petNameInput, petName);

  // Formatting date
  const [day, month, year] = birthDate.split("/");
  const formattedDate = `${year}-${month}-${day}`;

  await this.page.fill(petLocators.petBirthDateInput, formattedDate);
  await this.page.selectOption(petLocators.petTypeSelect, petType);
  await this.page.click(ownerLocators.submitButton);
});

Then('the user should see {string} listed as a pet for {string}', async function (this: PetClinicWorld, petName: string, ownerName: string) {
  // Wait for the "Owner Information" title to ensure we're on the right page
  await this.page.waitForSelector(ownerLocators.ownerInfoTitle);
  const titleText = await this.page.textContent(ownerLocators.ownerInfoTitle);
  expect(titleText).toBe('Owner Information');

  // Check that the pet name appears in the pet list
  const petNames = await this.page.locator(petLocators.petNameLinks).allTextContents();
  const petFound = petNames.some((name) => name.trim() === petName);
  expect(petFound, `Pet "${petName}" should be listed for owner "${ownerName}"`).toBe(true);
});

Then('the user should not see {string} listed as a pet for {string}', async function (this: PetClinicWorld, petName: string, ownerName: string) {
  await this.page.waitForSelector(ownerLocators.ownerInfoTitle);
  const titleText = await this.page.textContent(ownerLocators.ownerInfoTitle);
  expect(titleText).toBe('Owner Information');

  const petNames = await this.page.locator(petLocators.petNameLinks).allTextContents();
  const petFound = petNames.some((name) => name.trim() === petName);
  expect(petFound, `Pet "${petName}" should not be listed for owner "${ownerName}"`).toBe(false);
});
