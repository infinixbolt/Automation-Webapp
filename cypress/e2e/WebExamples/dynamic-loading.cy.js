
describe("Dynamic Element Behavior", () => {
    beforeEach(() => {
      cy.visit("dynamic-loading"); // Replace "your-page-url" with the URL of your web page
    });
  
    it("should handle element visibility", () => {
    //page link
    cy.get('.custom-padding > ul > :nth-child(1) > a').click();
      // Test 1: Element on page that is hidden
      cy.get('#finish > h4').should("not.be.visible"); // Verify that the element is initially hidden
      cy.get('#start > .btn').click(); // Click on the toggle button
      cy.wait(5000)
      cy.get('#finish > h4').should("be.visible"); // Verify that the element is now visible
  
    });
  
    it("should handle element addition", () => {
      //page link
      cy.get('.custom-padding > ul > :nth-child(2) > a').click();
      // Test 2: Element rendered after the fact
      cy.get(".page-layout > .container").should("not.have.descendants", "h4"); // Verify that the element is initially not present
      cy.get('#start > .btn').click(); // Click on the "Add Element" button
      cy.wait(5000)
      cy.get(".page-layout > .container").should("have.descendants", "h4"); // Verify that the new paragraph element is added
  
      cy.get(".page-layout > .container h4").contains("Hello World!"); // Verify the content of the new element
    });
  });
  