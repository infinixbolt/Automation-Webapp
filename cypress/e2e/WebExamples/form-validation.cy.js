import { describe } from "mocha";

// Contact Name field
const contactNameSelector = "#validationCustom01";
const validContactName = "John Doe";
const invalidContactName = "Accepts all char as valid"; // Invalid data, such as an empty string

// Contact Number field
const contactNumberSelector = ":nth-child(2) > #validationCustom05";
const validContactNumber = "123-4567890";
const invalidContactNumber = "12345"; // Invalid data, fewer than 10 digits

// Date Selector field
const dateSelector = ":nth-child(3) > #validationCustom05";
const validDate = "2023-06-04";
//const invalidDate = "2023-13-40"; // Invalid data, an invalid date format

// Payment Method field
const paymentMethodSelector = "#validationCustom04";
const validPaymentMethod = "cash on delivery";
const invalidPaymentMethod = "money"; // Invalid data, such as an empty string

const registerButton = '.col-12 > .btn';
const pageAlert = '.alert';
const container = '.page-layout > .container';


describe("Form validation", () => {
  beforeEach(() => {
        cy.visit("/form-validation");
  });

  it("register valid details", () => {
    cy.get(contactNameSelector).clear().type(validContactName);
    cy.get(contactNumberSelector).type(validContactNumber);
    cy.get(dateSelector).type(validDate);
    cy.get(paymentMethodSelector).select(validPaymentMethod);
    cy.get(registerButton).click();
    cy.get(pageAlert).invoke('text').then((text) => {
      const expectedText = 'Thank you for validating your ticket';
      expect(text.replace(/\s+/g, ' ').trim()).to.equal(expectedText);
    });
});

it("register invalid details", () => {
  cy.get(contactNameSelector).clear().type(invalidContactName);
  cy.get(contactNumberSelector).type(invalidContactNumber);
  cy.get(dateSelector).type(validDate);
  cy.get(paymentMethodSelector);
  cy.get(registerButton).click();
  cy.get(container).should(($element) => {
    const text = $element.text();
    expect(text.includes('Please enter your Contact name.') 
    || text.includes('Please provide your Contact number.')
    || text.includes('Please provide valid Date.')
    || text.includes('Please select the Paymeny Method.')
    ).to.be.true;
  });
   });


  });
