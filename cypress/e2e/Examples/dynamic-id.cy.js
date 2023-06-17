
describe('Button Test', () => {
    it('should click the button', () => {
      cy.visit('/dynamic-id');
  
      // Use a stable attribute or hierarchy to select the button
      cy.get('.btn-primary').click();
  
      // Add assertions or further actions as needed
      cy.contains('Button with Dynamic ID').should('be.visible');
    });
  });
  