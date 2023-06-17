
let addRemoveCheckbox ='#checkbox-example > button'
let enableDisableTextbox = '#input-example > button'
let textbox = '#input-example > input'
let checkbox = '#checkbox > input'



describe("Dynamic Controls", () => {
    beforeEach(() => {
      cy.visit("dynamic-controls");
    });

    it("should verify that the checkbox is visible or not by clicking the button", () => {
      cy.get(checkbox).should("be.visible");
      cy.get(addRemoveCheckbox).click();
      cy.wait(4000);
      cy.get(checkbox).should("not.exist");
    });

    it("should verify that the textbox is enabled or disabled by clicking the button", () => {
      cy.get(textbox).should("be.disabled");
      cy.get(enableDisableTextbox).click();
      cy.wait(4000);
      cy.get(textbox).should("be.enabled");
    });
});
  