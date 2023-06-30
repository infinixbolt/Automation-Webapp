import { describe } from "mocha";

describe('Test with JavaScript error in onload event', () => {
  it('should handle JavaScript error and prevent test failure', () => {
    cy.visit('javascript-error');
    cy.on('uncaught:exception', (err) => {
      // Log the error to the Cypress Command Log
      Cypress.log({
        displayName: 'JavaScript Error',
        message: [err.message],
        consoleProps: () => {
          return {
            'Error Message': err.message,
            'Error Stack': err.stack,
          };
        },
      });

      // Prevent the error from failing the test
      return false;
    });
  });
});

