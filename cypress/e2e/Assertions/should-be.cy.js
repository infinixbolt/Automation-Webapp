
describe('Should be Assertions', () => {
    beforeEach(() => {
      // Navigate to the page or perform necessary setup
      cy.visit('/assertions/should-be');
    });
  
    it('Asserts that a particular value is truthy or falsy.', () => {
      cy.get('#btn1').should('be.visible');
      cy.get('#ul1').should('be.visible');
      cy.get('#cb1').should('be.checked');
      cy.get('#div1').should('be.empty');
      cy.get('#btn3').should('be.enabled');
      cy.get('#btn4').should('be.disabled');
      cy.get('#a_number').invoke('text').then(parseFloat).should('be.a', 'number');
    });
  });
  