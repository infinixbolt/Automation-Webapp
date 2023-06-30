import { describe } from "mocha";

let loadedResourceText = ".alert";

describe("Slow resources to load", () => {
  beforeEach(() => {
    cy.visit("/slow");
  });
  it("should wait for at least 10 seconds for the element to load and assert its text", () => {
    cy.get(loadedResourceText, { timeout: 10000 }) // Wait for up to 10 seconds for the element to become visible
      .should("be.visible") // Ensure the element is visible
      .should("contain.text", "The slow task has finished. Thanks for waiting!"); // Replace with the expected text in the element
  });
});
