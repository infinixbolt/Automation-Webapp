
describe('Should have Assertions', () => {
    beforeEach(() => {
      // Navigate to the page or perform necessary setup
      cy.visit('/assertions/should-have');
    });
  
    it('should have validate multiple assertions', () => {
      cy.get('#btn1').should('have.class', 'class1 btn btn-outline-primary')
      cy.get('#btn2').should('have.text', 'Button 2')
      cy.get('#div1 > p').should('have.css', 'color', 'rgb(0, 0, 0)');
      //cy.get('#div1 > p').should('have.css', 'background-color').and('eq', 'rgb(77, 148, 255)');
      //cy.get('#div1 > p').should('have.css', 'background-color', 'rgb(77, 148, 255)');
      cy.get('#ul1').find('li').should('have.length', 3);
      cy.get('#input1').should('have.value', 'first name');
    });
  });
  