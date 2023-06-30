import { describe } from "mocha";


describe('Button Dialog Tests', () => {
  beforeEach(() => {
    cy.visit('/js-dialogs');
  });

  it('should handle JS alert', () => {
    cy.on('window:alert', (message) => {
      expect(message).to.equal('I am a Js Alert');
    });

    cy.get('#js-alert').click();

    cy.get('#dialog-response').should('have.text', 'OK');
  });

  it('should handle JS confirm - OK', () => {
    cy.on('window:confirm', () => true);
    cy.get('#js-confirm').click();
    cy.get('#dialog-response').should('have.text', 'Ok');
  });

  it('should handle JS confirm - Cancel', () => {
    cy.on('window:confirm', () => false);
    cy.get('#js-confirm').click();
    cy.get('#dialog-response').should('have.text', 'Cancel');
  });

  it('should handle JS prompt - OK', () => {
    const userInput = 'I am practicing dialog button using cypress';
    cy.window().then((win) => {
    cy.stub(win, 'prompt').returns(userInput);
    });
    cy.get('#js-prompt').click();
    cy.get('#dialog-response').should('have.text', userInput);
  });

  it('should handle JS prompt - Cancel', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(null);
    });
    cy.get('#js-prompt').click();
    cy.get('#dialog-response').should('have.text', '');
  });
});
