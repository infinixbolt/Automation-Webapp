
describe('Scrolling Test', () => {
    beforeEach(() => {
      cy.visit('/scrollbars');
    });
  
    it('should scroll to a button and click it', () => {
      // Scroll to the .scroll-view element
      cy.get('[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]').scrollIntoView().should('be.visible');
      // Click the button inside the .scroll-view element
      cy.get('#hidingButton').click();
    });
  });
  