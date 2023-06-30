import { describe } from "mocha";

describe("Broken Images", () => {
  beforeEach(() => {
    cy.visit("/broken-images");
  });

  it('should check for broken images', () => {
    cy.get('img').each(($img) => {
      cy.request({
        url: $img.attr('src'),
        failOnStatusCode: false
      }).then((response) => {
        if (response.status === 200) {
          cy.log(`Image ${$img.attr('src')} is loaded successfully`)
        } else {
          cy.log(`Image ${$img.attr('src')} is broken`)
        }
      })
    })
  })
})
