
describe('Should have Assertions', () => {
    beforeEach(() => {
      // Navigate to the page or perform necessary setup
      cy.visit('/assertions/should-equal');
    });
  
    it('should equal assertions', () => {
      //cy.get('h6').invoke('text'.trim()).should('equal', 'input1')
      //cy.get('h6').invoke('text').should('eq', 'input1'.trim());
      cy.get('h6').invoke('text').then((text) => {
      cy.wrap(text.trim()).should('equal', 'input1');
  });

      cy.get('#div1').invoke('text').should('equal', 'A simple div')
    });
  });
  