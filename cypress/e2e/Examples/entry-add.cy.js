
describe('Entry Ad', () => {
    beforeEach(() => {
      // Add a listener for the uncaught:exception event
      cy.on('uncaught:exception', () => {
        // Prevent Cypress from failing the test
        return false;
      });
      cy.visit('/entry-ad');
    });
  
    it('should not appear on subsequent page loads after being closed', () => {
  
      // Check if the entry ad is visible and close it
      cy.get('.modal-content').should('be.visible');
      cy.get('.btn-secondary').click();
  
      // Reload the page and verify that the entry ad does not appear
      cy.reload();
      cy.get('.modal-content').should('not.exist');
    });
  });
  
  