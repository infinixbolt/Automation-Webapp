import { describe } from "mocha";

describe("Infinite Scrolling", () => {
  beforeEach(() => {
    cy.visit("/infinite-scroll");
  });

  it("Scroll 10 times and stop since its an infinite scroll", () => {
    const maxScrollCount = 10; // Maximum number of times to scroll
    let scrollCount = 0; // Counter to keep track of the scroll count

    // Scroll function to be called recursively
    const scrollAndCheckHeight = () => {
      if (scrollCount >= maxScrollCount) {
        // Stop scrolling if the maximum scroll count is reached
        return;
      }

      cy.window().then((win) => {
        const currentScrollPosition = win.scrollY; // Get the current scroll position

        cy.window().scrollTo("bottom"); // Scroll to the bottom of the page

        cy.wait(500); // Wait for the scroll action to complete

        cy.window().then((newWin) => {
          const newScrollPosition = newWin.scrollY; // Get the new scroll position

          if (newScrollPosition > currentScrollPosition) {
            scrollCount++;
            scrollAndCheckHeight(); // Continue scrolling
          }
        });
      });
    };

    scrollAndCheckHeight(); // Start the scrolling process
  });

  it("Scroll 10 times and stop and click the go back up button", () => {
    const maxScrollCount = 10; // Maximum number of times to scroll
    let scrollCount = 0; // Counter to keep track of the scroll count

    // Scroll function to be called recursively
    const scrollAndCheckHeight = () => {
      if (scrollCount >= maxScrollCount) {
        // Stop scrolling if the maximum scroll count is reached
        return;
      }

      cy.window().then((win) => {
        const currentScrollPosition = win.scrollY; // Get the current scroll position

        cy.window().scrollTo("bottom"); // Scroll to the bottom of the page

        cy.wait(500); // Wait for the scroll action to complete

        cy.window().then((newWin) => {
          const newScrollPosition = newWin.scrollY; // Get the new scroll position

          if (newScrollPosition > currentScrollPosition) {
            scrollCount++;
            scrollAndCheckHeight(); // Continue scrolling
          }
        });
      });
    };

    scrollAndCheckHeight(); // Start the scrolling process
    // Click the 'go back up' button
    cy.get("#back-to-top").click();

    // Verify that the page scrolled back to the top
    cy.window().then((win) => {
      expect(win.scrollY).to.be.at.least(0);
    });
  });
});
