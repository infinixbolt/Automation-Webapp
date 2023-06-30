describe('Floating Menu Test', () => {
    it('should scroll to the bottom and click the floating button to scroll back up, asserting visibility of the floating menu', () => {
      // Visit the page with the long content and floating menu
      cy.visit('/floating-menu')
  
      // Get the initial visibility state of the floating menu
      cy.get('#menu').should('be.visible')
  
      // Scroll to the bottom of the page
      cy.scrollTo('bottom')

      // Assert that the floating menu is still visible
      cy.get('#menu').should('be.visible')
  
      // Click the floating button to scroll back up
      cy.get('#back-to-top').click()
  
      // Assert that the floating menu is still visible
      cy.get('#menu').should('be.visible')
    })
  })
  