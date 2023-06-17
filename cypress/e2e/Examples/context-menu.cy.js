import { describe } from "mocha";

let boxSelector = '#hot-spot';

describe('Context Menu Test', () => {
  it('should trigger an alert and display the context menu on right-click', () => {
    // Visit the page where the context menu exists
    cy.visit('/context-menu')

    // Stub the JavaScript alert and confirm its text
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
    })
    cy.get('@alertStub').should('not.be.called')
    cy.on('window:confirm', (message) => {
      expect(message).to.equal('you selected a context menu')
    })

    // Right-click the box to trigger the alert and open the context menu
    cy.get(boxSelector).rightclick()

    // Verify the alert was displayed
    cy.get('@alertStub').should('be.calledOnce')

    // Click "OK" on the alert to display the context menu
    cy.on('window:confirm', () => true)
  })
})
