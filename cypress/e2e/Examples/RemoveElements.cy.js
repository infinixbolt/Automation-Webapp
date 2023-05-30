import { describe } from "mocha";

//DOM Selectors
let addElementButton = '.container > .btn';




describe("Add and remove elements", () =>{
    beforeEach(() =>{
        cy.visit('/add-remove-elements');
    });

it("Add 5 elements",() =>{
    //add 5 elements on the page
    for (let i = 0; i < 5; i++) {
    cy.get(addElementButton).click();
    }
    //verify the added elements are visible in the page
    for (let i = 1; i <= 5; i++) {
    const selector = `#elements > :nth-child(${i})`;
    cy.get(selector).should('exist');
    }
});

it.only("Remove 5 elements",() =>{
    //add 5 elements on the page
    for (let i = 0; i < 5; i++) {
    cy.get(addElementButton).click();
    }

    //verify the added elements are visible in the page
    for (let i = 1; i <= 5; i++) {
    const selector = `#elements > :nth-child(${i})`;
    cy.get(selector).should('exist');
    }

    //remove the 5 elements added previously
    for (let i = 5; i >= 1; i--) {
    const selector = `#elements > :nth-child(${i})`;
    cy.get(selector).click().wait(1000);
    }

    //verify the elements are removed
    for (let i = 1; i <= 5; i++) {
    const selector = `#elements > :nth-child(${i})`;
    cy.get(selector).should('not.exist');
    }
});

});