import { describe } from "mocha";
// Import the 'typo-js' library
const Typo = require('typo-js');

// Create a new instance of the dictionary for the desired language ('en_US' in this example)
const dictionary = new Typo('en_US');
let textElement = '.container > :nth-child(4)'

describe("Typographical errors", () => {
  beforeEach(() => {
    cy.visit("/typos");
  });

  it("confirm if a text contains typo error", () => {
cy.get(textElement).invoke('text').then((text) => {
  let words = text.split(' ');

  const typos = words.filter((word) => !dictionary.check(word));

  if (typos.length > 0) {
    // Log the typos in the Cypress test runner
    cy.log('Typos found: ' + typos.join(', '));
  } 
  else {
    // Log the absence of typos in the Cypress test runner
    cy.log('No typos found.');
  }
  })
  });
});

