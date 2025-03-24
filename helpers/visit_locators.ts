export const visitLocators = {
  petVisitsTable: '//h2[text()="Pets and Visits"]/following-sibling::table',
  visitDateColumn: '//table[contains(@class, "table-condensed")]//tbody/tr/td[1]',
  visitDescriptionColumn: '//table[contains(@class, "table-condensed")]//tbody/tr/td[2]',
  addVisitButton: '[ui-sref*="visits"]',
  visitDateInput: 'input[type="date"]',
  visitDescriptionInput: "visits > form > div:nth-child(2) > textarea",
  addNewVisitButton: 'button[type="submit"]',
};
