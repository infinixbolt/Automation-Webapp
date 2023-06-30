describe('Combined Test', () => {
    it('Handles redirect and verifies status code links', () => {
      cy.visit('/redirector');
  
      // Click on the link to trigger a redirect
      cy.get('#redirect').click();
  
      // Verify the destination page after the redirect
      cy.url().should('include', '/status-codes');
  
      // Verify the link for status code 200
      cy.contains('a', '200').should('have.attr', 'href', 'status-codes/200');
  
      // Verify the link for status code 301
      cy.contains('a', '301').should('have.attr', 'href', 'status-codes/301');
  
      // Verify the link for status code 404
      cy.contains('a', '404').should('have.attr', 'href', 'status-codes/404');
  
      // Verify the link for status code 500
      cy.contains('a', '500').should('have.attr', 'href', 'status-codes/500'); 
      });
  });
  