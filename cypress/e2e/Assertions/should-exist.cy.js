
describe('DOM', function() {
    it('should exist in the DOM', function() {
      cy.visit('/assertions/should-exist'); //
      cy.get('#div1').should('exist');
    });
  });
  