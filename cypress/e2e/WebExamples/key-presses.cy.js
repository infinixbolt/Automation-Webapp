import { describe } from "mocha";

describe("Textbox key press test", () => {
  it("Should display the pressed key in the result element", () => {
    cy.visit("/key-presses");

    // Get the textbox and result elements
    cy.get("#target").as("textbox");
    cy.get("#result").as("result");

    // Prevent page refresh on Enter key press
    cy.get("@textbox").then(($textbox) => {
      $textbox.on("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      });
    });

    // Type and assert a few keys
    cy.get("@textbox")
      .type("A")
      .then(() => cy.get("@result").should("have.text", "You entered: A"));

    cy.get("@textbox")
      .type("1")
      .then(() => cy.get("@result").should("have.text", "You entered: 1"));

    cy.get("@textbox")
      .type("{enter}")
      .then(() => {cy.get("@result").should("have.text", "You entered: ENTER");
      });

    // Special keys
    cy.get("@textbox")
      .type("{ctrl}")
      .then(() =>
        cy.get("@result").should("have.text", "You entered: CONTROL")
      );

    cy.get("@textbox")
      .type("{shift}")
      .then(() => cy.get("@result").should("have.text", "You entered: SHIFT"));

    cy.get("@textbox")
      .type("{esc}")
      .then(() => cy.get("@result").should("have.text", "You entered: ESCAPE"));

    cy.get("@textbox")
      .type("{alt}")
      .then(() => cy.get("@result").should("have.text", "You entered: ALT"));

    // Clear the textbox
    cy.get("@textbox").clear();
  });
});
