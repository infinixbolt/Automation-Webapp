
describe('Cookie Consent', () => {
    beforeEach(() => {
      cy.visit('/cookie-alert'); // Replace with your website URL
    });
  
    it('should display cookie consent alert and accept cookies', () => {
      cy.get('#js-cookie-box')
        .should('be.visible')
        .within(() => {
          cy.contains('I Accept').click();
        });
  
      cy.get('cookie-consent-alert').should('not.exist'); // Verify that the cookie consent alert is no longer visible
    });
  });
  