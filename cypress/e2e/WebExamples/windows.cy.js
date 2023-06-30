/*Since cypress doesn’t allow the opening of a new browser tab, the workaround in such cases is to remove
 the attribute – target=’_blank’. Now when we click the ‘Click Here’ button, instead of a new tab, the 
 webpage is opened in the current tab. And then when the webpage is loaded, we are validating that the 
 URL has the text ‘/windows/new’ and the webpage has the text ‘new Window’.*/



describe('Example to demonstrate the handling of new browser windows in Cypress', () => {
    it('Handling new Browser Tab', ()=> {
      cy.visit('/windows');
      cy.get('.row > a').invoke('removeAttr', 'target').click();//removes the new tab target to open the new tab on the current tab
      cy.url().should('include', '/windows/new');
      cy.get('h1').should('have.text', 'Example of a new window');
      cy.go('back');
    });
  });
  
  
  
  