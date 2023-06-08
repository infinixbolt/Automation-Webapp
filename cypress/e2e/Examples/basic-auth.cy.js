import { describe } from "mocha";

let validUsername = "admin";
let validPassword = "admin";
let pageAlert = ".alert";

describe("basic auth Log in", () => {
  beforeEach(() => {
    //sending the username and password in plain text over the network to the server.
    cy.visit("/basic-auth", {
      auth: {
        username: validUsername,
        password: validPassword,
      },
    });
  });

  it("basic login", () => {
    cy.get(pageAlert).invoke('text').then((text) => {
      const expectedText = 'Congratulations! You must have the proper credentials.';
      expect(text.replace(/\s+/g, ' ').trim()).to.equal(expectedText);
    });
    });
  });
