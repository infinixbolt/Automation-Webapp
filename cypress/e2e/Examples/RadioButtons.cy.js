describe("Favorite selection", () => {
  const favoriteColors = ["blue", "red", "yellow", "black", "green"];
  const favoriteSports = ["basketball", "football", "tennis"];

  beforeEach(() => {
    cy.visit("/radio-buttons");
  });

  it("should select each favorite color individually", () => {
    favoriteColors.forEach((color) => {
      // Find the radio button element with the corresponding value
      cy.get(`input[value="${color}"]`).then(($input) => {
        if ($input.is(":disabled")) {
          // If the radio button is disabled, assert that it is disabled
          expect($input).to.be.disabled;
        } else {
          // If the radio button is enabled, select it and assert that it is checked
          cy.get(`input[value="${color}"]`).check().should("be.checked");

          // Filter the other colors excluding the current color
          const otherColors = favoriteColors.filter((otherColor) => otherColor !== color);
          
          // Assert that the radio buttons for other colors are not checked
          otherColors.forEach((otherColor) => {
            cy.get(`input[value="${otherColor}"]`).should("not.be.checked");
          });
        }
      });
    });
  });

  it("should select each favorite sport individually", () => {
    favoriteSports.forEach((sport) => {
      // Select the radio button for the current sport and assert that it is checked
      cy.get(`input[value="${sport}"]`).check().should("be.checked");

      // Filter the other sports excluding the current sport
      const otherSports = favoriteSports.filter(
        (otherSport) => otherSport !== sport
      );
      // Assert that the radio buttons for other sports are not checked
      otherSports.forEach((otherSport) => {
        cy.get(`input[value="${otherSport}"]`).should("not.be.checked");
      });
    });
  });
});
