/*since cypress does not currently support hover command and the cy(element).trigger('mouseover') is
selective and mostly does not work depending on app's structure,
 this brought about the use of a plugin 'cypress-real-events'. 
 Remember to add "import "cypress-real-events";" in the command.js or e2e.js file in the support folder*/


describe("Hover image elements", () => {
  beforeEach(() => {
    cy.visit("/hovers");
  });

  const imageSelectors = [
    ":nth-child(4) > img",
    ":nth-child(5) > img",
    ":nth-child(6) > img",
  ];
  const expectedTexts = ["name: user1", "name: user2", "name: user3"];
  const expectedLinkUrls = ["/users/1", "/users/2", "/users/3"];

  it("should make element visible on mouseover", () => {
    imageSelectors.forEach((imageSelector, index) => {
      cy.get(imageSelector).realHover();

      cy.get('.figcaption')
        .should('be.visible')
        .find('h5')
        .should('contain', expectedTexts[index]);

      cy.get('.figcaption a')
        .should('be.visible')
        .eq(index)
        .should('have.attr', 'href', expectedLinkUrls[index]);
    });
  });
});
