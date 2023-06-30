// describe("Element Visibility Test", () => {
//   beforeEach(() => {
//     cy.visit("disappearing-elements");
//   });

//   it("should log visible and hidden elements on each page load", () => {
//     const elements = [
//       { name: "Inbox", selector: ".btn-primary" },
//       { name: "Sent", selector: ".btn-info" },
//       { name: "Spam", selector: ".btn-danger" },
//       { name: "Important", selector: ".btn-success" },
//       { name: "Starred", selector: ".btn-warning" }
//     ];

//     cy.document().then((doc) => {
//       elements.forEach((element) => {
//         const visibleElements = Cypress.$(element.selector, doc).filter(":visible");
//         const isVisible = visibleElements.length > 0;
//         const status = isVisible ? "Visible" : "Hidden";
//         cy.log(`${element.name} is ${status}`);
//       });
//     });
//   });
// });

describe("Element Visibility Test", () => {
  beforeEach(() => {
    cy.visit("disappearing-elements");
  });

  it("should log visible and hidden elements on each page load", () => {
    const elements = [
      { name: "Inbox", selector: ".btn-primary" },
      { name: "Sent", selector: ".btn-info" },
      { name: "Spam", selector: ".btn-danger" },
      { name: "Important", selector: ".btn-success" },
      { name: "Starred", selector: ".btn-warning" }
    ];

    elements.forEach((element) => {
      const isVisible = Cypress.$(element.selector).is(":visible");
      const status = isVisible ? "Visible" : "Hidden";
      cy.log(`${element.name} is ${status}`);
    });
  });
});
