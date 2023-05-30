import { describe } from "mocha";

//DOM Selectors
let inputNumber = '#input-number';
let inputText = '#input-text';
let inputPassword = '#input-password';
let inputDate = '#input-date';
let outputNumber = '#output-number';
let outputText = '#output-text';
let outputPassword = '#output-password';
let outputDate = '#output-date';
let displayInputsButton = '#btn-display-inputs';
let clearInputsButton = '#btn-clear-inputs';
let displayResultPanel = '#result';

//Test Data
let number = '0807';
let text = "Julian";
let password = "abcd1234";
let date = "2023-05-23";


describe("Web Inputs", () =>{
    beforeEach(() =>{
        cy.visit('/inputs');
    });

it("Web Inputs Verification",() =>{
    //Type inouts to the text fields
    cy.get(inputNumber).type(number);
    cy.get(inputText).type(text);
    cy.get(inputPassword).type(password);
    cy.get(inputDate).type(date);
    cy.get(displayInputsButton).click();

    //assert the displayed result is same as entered previously
    // cy.get(outputNumber).should('have.value',number);
    // cy.get(outputText).should('have.value',text);
    // cy.get(outputPassword).should('have.value',password);
    // cy.get(outputDate).should('have.value',date);

    cy.get(outputNumber).contains(number);
    cy.get(outputText).contains(text);
    cy.get(outputPassword).contains(password);
    cy.get(outputDate).contains(date);
});
it("Clear Inputs",() =>{
    //Type inputs to the text fields
    cy.get(inputNumber).type(number);
    cy.get(inputText).type(text);
    cy.get(inputPassword).type(password);
    cy.get(inputDate).type(date);
    cy.get(clearInputsButton).click();

    //clear input fields
    cy.get(inputNumber).should('be.empty');
    cy.get(inputText).should('be.empty');
    cy.get(inputPassword).should('be.empty');
    cy.get(inputDate).should('be.empty');

});

});