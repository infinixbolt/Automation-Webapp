describe('Combined Dropdown Tests', () => {
    it('Selects values from dropdowns', () => {
      cy.visit('/dropdown');
  
      // Select "Option 2" from the first dropdown
      cy.get('#dropdown') .select('Option 2').should('have.value', '2');
  
      // Select the date: 1980-07-15 from the second set of dropdowns
      cy.get('#year').select('1980').should('have.value', '1980');
      cy.get('#month').select('July').should('have.value', '6');
      cy.get('#day').select('15').should('have.value', '15')
  
      // Select "Nigeria" from the country dropdown
      cy.get('#country') .select('Nigeria').should('have.value', 'NG');
    });
  });
  