import { describe } from "mocha";

let validUsername = "admin";
let validPassword = "admin";
let pageAlert = ".alert";

describe("digest authentication Log in", () => {
  beforeEach(() => {
    //This method is considered more secure than basic authentication, as the message digest makes it more difficult for an attacker to obtain the password.
    cy.visit("/digest-auth", {
      auth: {
        username: validUsername,
        password: validPassword,
      },
    });
  });

  it("digest auth login", () => {
    cy.get(pageAlert).invoke('text').then((text) => {
      const expectedText = 'Congratulations! You must have the proper credentials.';
      expect(text.replace(/\s+/g, ' ').trim()).to.equal(expectedText);
    });
    });
  });
