
describe('Autocomplete Test', () => {
    it('should display autocomplete suggestions for USA', () => {
      cy.visit('/autocomplete');
  
       // Type text into the autocomplete input field
       cy.get('#country').type('United');
  
       // Wait for the autocomplete suggestions to appear
       cy.get('#countryautocomplete-list').should('be.visible');
  
      // Click on the desired autocomplete suggestion
       cy.get('#countryautocomplete-list').contains('United States of America').click();
  
       // Assert that the input field contains the selected suggestion and submit
       cy.get('#country').should('have.value', 'United States of America')
       cy.get(':nth-child(2) > .btn').click();
       cy.get('#result').should('have.text','You selected: United States of America')
    });

    it('should display autocomplete suggestions for Nigeria', () => {
        cy.visit('/autocomplete');
    
         // Type text into the autocomplete input field
         cy.get('#country').type('N');
    
         // Wait for the autocomplete suggestions to appear
         cy.get('#countryautocomplete-list').should('be.visible');
    
        // Click on the desired autocomplete suggestion
         cy.get('#countryautocomplete-list').contains('Nigeria').click();
    
         // Assert that the input field contains the selected suggestion and submit
         cy.get('#country').should('have.value', 'Nigeria')
         cy.get(':nth-child(2) > .btn').click();
         cy.get('#result').should('have.text','You selected: Nigeria')

  });
}); 