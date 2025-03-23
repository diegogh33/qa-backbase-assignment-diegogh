import { When, Then, DataTable } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { ownerLocators } from '../../helpers/owner_locators';
import { navBarLocators } from '../../helpers/navBar_locators';

interface PetClinicWorld {
  page: Page;
}

When('the user looks for {string} in the owners table', async function (this: PetClinicWorld, ownerName: string) {
  // Navigate to the owners list
  await this.page.click(navBarLocators.ownersMenu);
  await this.page.click(navBarLocators.allOptionMenu);
  await this.page.waitForSelector(ownerLocators.ownersTable);

  // Verify the owner exists in the table
  const nameCells = await this.page.locator(ownerLocators.nameColumnCells).allTextContents();
  const ownerFound = nameCells.some((text) => text.trim() === ownerName);
  expect(ownerFound, `Owner "${ownerName}" should be found in the owners table`).toBe(true);

  // Click the owner's link to go to their details page
  const ownerLinkLocator = ownerLocators.ownerLink.replace('{ownerName}', ownerName);
  await this.page.click(ownerLinkLocator);
});

Then('the user should see {string} listed in the table', async function (this: PetClinicWorld, ownerName: string) {
  // Get all Name column cells and check their text content
  const nameCells = await this.page.locator(ownerLocators.nameColumnCells).allTextContents();
  const found = nameCells.some((text) => text.trim() === ownerName);
  expect(found).toBe(true);
});

When('the user searches for {string} using the table filter', async function (this: PetClinicWorld, ownerName: string) {
  await this.page.fill(ownerLocators.searchFilter, ownerName);
});

When('the user creates a new owner with the following details', async function (this: PetClinicWorld, dataTable: DataTable) {
  await this.page.click(navBarLocators.ownersMenu);
  await this.page.click(navBarLocators.registerOptionMenu);
  
  const ownerData = dataTable.hashes()[0];
  await this.page.fill(ownerLocators.firstNameInput, ownerData['First Name']);
  await this.page.fill(ownerLocators.lastNameInput, ownerData['Last Name']);
  await this.page.fill(ownerLocators.addressInput, ownerData['Address']);
  await this.page.fill(ownerLocators.cityInput, ownerData['City']);
  await this.page.fill(ownerLocators.telephoneInput, ownerData['Telephone']);
  await this.page.click(ownerLocators.submitButton);
});

When('the user sees {string} listed in the owners table', async function (this: PetClinicWorld, ownerName: string) {
  await this.page.waitForSelector(ownerLocators.ownersTable);
  const nameCells = await this.page.locator(ownerLocators.nameColumnCells).allTextContents();
  const found = nameCells.some((text) => text.trim() === ownerName);
  expect(found).toBe(true);
});

When('the user enters into {string} details', async function (this: PetClinicWorld, ownerName: string) {
  const ownerLinkLocator = ownerLocators.ownerLink.replace('{ownerName}', ownerName);
  await this.page.click(ownerLinkLocator);
});
