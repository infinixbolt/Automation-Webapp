import { describe } from "mocha";

let usernameTextbox = '#username';
let passwordTextbox = '#password';
let validUsername = 'practice';
let validPassword = "SuperSecretPassword!";
let invalidUsername = "abcd";
let invalidPassword = "1234";
let loginButton = '#login > .btn';
let pageAlert ='#flash';

describe("Log in", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should log an error if login details are incorrect", () => {
    cy.get(usernameTextbox).type(invalidUsername);
    cy.get(passwordTextbox).type(invalidPassword);
    cy.get(loginButton).click();
    cy.get(pageAlert).should(($element) => {
    const text = $element.text();
    expect(text.includes("Your username is invalid!") || text.includes("Your password is invalid!")).to.be.true;});
    cy.log("Login details are incorrect");
  });

  it("should navigate to another page on successful login", () => {
    cy.visit("/login"); 
    cy.get(usernameTextbox).type(validUsername);
    cy.get(passwordTextbox).type(validPassword);
    cy.get(loginButton).click();
    cy.url().should("include", "/secure");
    cy.get(pageAlert).should("contain.text", "You logged into a secure area!");
  });
});
