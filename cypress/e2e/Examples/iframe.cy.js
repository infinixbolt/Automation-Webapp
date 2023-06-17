describe('Test iframe content', () => {
    beforeEach(() => {
      cy.visit('your-page-url'); // Replace 'your-page-url' with the actual URL of the page
    });
  
    it('should verify the presence of the YouTube iframe', () => {
      cy.get('#youtube-iframe') // Replace '#youtube-iframe' with the selector of your YouTube iframe
        .should('be.visible')
        .then(($iframe) => {
          // Perform assertions specific to the YouTube iframe, such as checking for the existence of a video player component
          // Since you cannot directly interact with the iframe, you can only verify its presence and basic functionality
        });
    });
  
    it('should verify the presence of the TinyMCE iframe', () => {
      cy.get('#tinymce-iframe') // Replace '#tinymce-iframe' with the selector of your TinyMCE iframe
        .should('be.visible')
        .then(($iframe) => {
          // Perform assertions specific to the TinyMCE iframe, such as checking if the editor toolbar is present
          // Again, you cannot directly interact with the iframe's content, so you can only verify its presence and basic functionality
        });
    });
  
    it('should enter email and subscribe in the email subscription iframe', () => {
        cy.frameLoaded('#subscription-iframe') // Replace '#subscription-iframe' with the selector of your email subscription iframe
          .iframe()
          .find('input[type="email"]') // Replace 'input[type="email"]' with the selector of the email input field within the iframe
          .type('valid-email@example.com') // Replace 'valid-email@example.com' with the email you want to enter
          .should('have.value', 'valid-email@example.com');
    
        cy.frameLoaded('#subscription-iframe') // Replace '#subscription-iframe' with the selector of your email subscription iframe
          .iframe()
          .find('button[type="submit"]') // Replace 'button[type="submit"]' with the selector of the subscribe button within the iframe
          .click();
    
        cy.contains('#success-message', 'You are now subscribed!') // Replace '#success-message' with the selector of the element where the success message is displayed outside the iframe
          .should('be.visible'); 
    });
  });
  