import { describe } from "mocha";

let emailField = 'input#email';
let retrievePasswordButton = 'button[type="submit"]';
let yourEmail = 'abc@gmail.com';
let pageAlert = '#confirmation-alert > p';


describe("Forgot password", () => {
  beforeEach(() => {
    cy.visit("/forgot-password");
  });

  it("type email and recover password. compare response", () => {
      cy.get(emailField).type(yourEmail);
      cy.get(retrievePasswordButton).click();
      cy.get(pageAlert).invoke('text').then((text) => {
        const expectedText = 'An e-mail has been sent to you which explains how to reset your password.';
        expect(text.replace(/\s+/g, ' ').trim()).to.equal(expectedText);
      });
           
cy.log(`A forgot password retrieval was initiated from https://practice.expandtesting.com/forgot-password "yourEmail".
If this were a real message, you would likely see a link or some relevant text that would help you retrieve a password.
If you want to test login, visit https://practice.expandtesting.com/login and use the following credentials:
username: practice
password: SuperSecretPassword!
The login test is included in this repository`);
    });
  });
