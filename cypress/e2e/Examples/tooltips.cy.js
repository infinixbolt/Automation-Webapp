// Ensure that you have imported the 'cypress-real-events/support' command in your Cypress support/index.js file

describe('Tooltip Tests', () => {
    beforeEach(() => {
      cy.visit('/tooltips') // Replace with the URL of your application
    })
  
    it('should display "Tooltip on top" when hovering over the button', () => {
      cy.get('#btn1') // Replace with the ID of your first button
        .realHover()
        .get('.tooltip-inner') // Replace with the class or identifier of your tooltip element
        .should('be.visible')
        .contains('Tooltip on top')
    })
  
    // Repeat the above block of code for the remaining buttons with their respective IDs and tooltip text
    it('should display "Tooltip at End" when hovering over the button', () => {
      cy.get('#btn2')
        .realHover()
        .get('.tooltip-inner')
        .should('be.visible')
        .contains('Tooltip on end')
    })
  
    it('should display "Tooltip at Bottom" when hovering over the button', () => {
      cy.get('#btn3')
        .realHover()
        .get('.tooltip-inner')
        .should('be.visible')
        .contains('Tooltip on bottom')
    })
  
    it('should display "Tooltip at Start" when hovering over the button', () => {
      cy.get('#btn4')
        .realHover()
        .get('.tooltip-inner')
        .should('be.visible')
        .contains('Tooltip on start')
    })
  
    it('should display "Tooltip with HTML" when hovering over the button', () => {
      cy.get('#btn5')
        .realHover()
        .get('.tooltip-inner')
        .should('be.visible')
        .contains('Tooltip with HTML')
    })
  })
  