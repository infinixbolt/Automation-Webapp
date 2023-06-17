
describe("Web Inputs", () =>{
    beforeEach(() =>{
        cy.visit('/otp-login');
    });
    it('Logs in with OTP', () => {
      // Enter the email address
      cy.get('input[name="email"]').type('practice@expandtesting.com');
  
      // Click the submit button to request OTP
      cy.get('button[type="submit"]').click();
  
      // Wait for OTP input field to appear
      cy.get('input[name="otp"]').should('be.visible');
  
      // Enter the OTP code
      cy.get('input[name="otp"]').type('214365');
  
      // Click the login button
      cy.get('button[type="submit"]').click();
  
      // Assert that the user is logged in successfully and navigated to /secure
      cy.url().should('include', '/secure');
    });
});