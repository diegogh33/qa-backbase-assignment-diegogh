export const ownerLocators = {
  //owners
  ownerTitle: "owner-list>h2:first-child",
  ownersTable: "table",
  searchFilter: '[placeholder="Search Filter"]',
  nameColumnCells: "table >> tr >> td:nth-child(1)", // Assuming Name is first column
  firstNameInput: 'input[name="firstName"]',
  lastNameInput: 'input[name="lastName"]',
  addressInput: 'input[name="address"]',
  cityInput: 'input[name="city"]',
  telephoneInput: 'input[name="telephone"]',
  submitButton: 'button[type="submit"]',
  ownerLink: 'a:has-text("{ownerName}")', // Dynamic, replace {ownerName} in code

  //owner information
  addPetButton: "text=Add New Pet",
  ownerInfoTitle: "owner-details>h2:first-child",
  ownerName: '//table[contains(@class, "table-striped")]//b',
};
