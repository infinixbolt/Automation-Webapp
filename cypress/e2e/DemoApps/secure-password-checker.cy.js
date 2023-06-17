
describe('Password Secure Checker', () => {
    it('should hide labels when the corresponding conditions are met', () => {
      // Visit the page with the text field and labels
      cy.visit('/secure-password-checker');
  
      // Assert that all labels are initially visible
      cy.get('.length').should('be.visible');
      cy.get('.lowercase').should('be.visible');
      cy.get('.uppercase').should('be.visible');
      cy.get('.special').should('be.visible');
  
      // Type a password that meets all the conditions
      const password = 'SecureP@ssw0rd';
      cy.get('.password').type(password);
  
      // Ensure that the password is entered correctly
      cy.get('.password').should('have.value', password);
  
      // Wait for the password validation to happen
      cy.wait(1000);
  
      // Assert that all labels are no longer visible
      cy.get('.length').should('not.be.visible');
      cy.get('.lowercase').should('not.be.visible');
      cy.get('.uppercase').should('not.be.visible');
      cy.get('.special').should('not.be.visible');
    });
  });
  