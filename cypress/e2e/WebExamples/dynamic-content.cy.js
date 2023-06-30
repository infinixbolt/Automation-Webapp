describe('Combined Dropdown Tests', () => {
    it('should load new images and content together on page refresh for each div', () => {
      cy.visit('/dynamic-content');
  
      // Get all child divs containing image and content
      cy.get("#content .row").each(($childDiv) => {
        // Capture the initial image source and content
        let initialImageSrc;
        let initialContent;
  
        cy.wrap($childDiv)
          .find('.img')
          .should('be.visible')
          .invoke('attr', 'src')
          .then((src) => {
            initialImageSrc = src;
            cy.log(`Initial Image Source: ${initialImageSrc}`);
          });
  
        cy.wrap($childDiv)
          .next('.col-md-10')
          .invoke('text')
          .then((text) => {
            initialContent = text;
            cy.log(`Initial Content: ${initialContent}`);
          });
  
        // Refresh the page
        cy.get('.container > :nth-child(4) > a').click();
  
        // Wait for the updated child div to become visible
        cy.wrap($childDiv)
          .next('.col-md-10')
          .should('be.visible')
          .then(($updatedContentDiv) => {
            cy.wrap($updatedContentDiv)
              .prev('.row')
              .find('.img')
              .should('be.visible')
              .invoke('attr', 'src')
              .then((updatedImageSrc) => {
                cy.log(`Updated Image Source: ${updatedImageSrc}`);
                expect(updatedImageSrc).to.not.equal(initialImageSrc);
              });
  
            cy.wrap($updatedContentDiv)
              .invoke('text')
              .then((updatedContent) => {
                cy.log(`Updated Content: ${updatedContent}`);
                expect(updatedContent).to.not.equal(initialContent);
              });
          });
      });
    });
  });
  