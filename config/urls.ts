import config from "../playwright.config";

const baseURL = config.use?.baseURL || "http://localhost:8080";

export const urls = {
  ownersDetails: `${baseURL}#!/owners/details`,
};
