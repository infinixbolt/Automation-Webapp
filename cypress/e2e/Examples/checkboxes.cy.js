import { describe } from "mocha";

let checkbox1 = '#checkbox1';
let checkbox2 = '#checkbox2';

describe('Checkbox Tests', () => {
  beforeEach(() => {
    cy.visit('/checkboxes');
  });

  it('should check/uncheck the first checkbox and confirm', () => {
    // Check the first checkbox and confirm its checked
    cy.get(checkbox1).check().should('be.checked');
  
    // Uncheck the first checkbox and confirm its unchecked
    cy.get(checkbox1).uncheck().should('not.be.checked');

  });

  it('should uncheck/check the second checkbox and confirm', () => {
    // Uncheck the second checkbox and confirm its unchecked
    cy.get(checkbox2).uncheck().should('not.be.checked');

    // Check the second checkbox and confirm its checked
    cy.get(checkbox2).check().should('be.checked');
  });
});
