describe("Should match Assertions", () => {
  beforeEach(() => {
    // Navigate to the page or perform necessary setup
    cy.visit("/assertions/should-match");
  });

  it("should match assertion.", () => {
    cy.get("#div1").invoke('text').should('match', /This is our address\s+\.{3}$/);
  });
});
