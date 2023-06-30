import { describe } from 'mocha';
let enabledMenu = '#ui-id-2';
let disabledMenu = '#ui-id-1';
let downloadMenu = '#ui-id-4';


describe('Menu options testing', () => {
  beforeEach(() => {
    cy.visit('/jqueryui/menu');
  });

  it('Should open Enabled menu and its submenus', () => {
    cy.get(enabledMenu) // Replace with the actual selector for the Enabled menu
      .click();

    cy.get('#ui-id-4') // Replace with the actual selector for the Downloads submenu
      .click();

    cy.get('#ui-id-5') // Replace with the actual selector for the Back to JQuery UI submenu
      .click();
  });

  it.only('Should trigger PDF download', () => {
    cy.get(enabledMenu)
      .trigger('mouseover');

    cy.get(downloadMenu)
      .trigger('mouseover')
      .click();

    cy.get('#ui-id-6')
      .click();

    // Initiate the download and terminate the test immediately
    cy.window().then((win) => {
      win.addEventListener('beforeunload', (event) => {
        event.preventDefault();
        event.returnValue = '';
      });

      cy.stub(win, 'open').as('windowOpen');
    });

    cy.get('@windowOpen').should('be.called');
  });
    // Assert that the download was triggered (e.g., by checking the download attribute or the request made)
  });

  it('Should trigger CSV download', () => {
    cy.get(enabledMenu)
      .click();

    cy.get(downloadMenu)
      .click();

    cy.get('#ui-id-7') // Replace with the actual selector for the CSV download option
      .click();

    // Assert that the download was triggered (e.g., by checking the download attribute or the request made)
  });

  it('Should trigger Excel download', () => {
    cy.get(enabledMenu)
      .click();

    cy.get(downloadMenu)
      .click();

    cy.get('#ui-id-8') // Replace with the actual selector for the Excel download option
      .click();

    // Assert that the download was triggered (e.g., by checking the download attribute or the request made)
  });

  it('Should not be able to interact with Disabled menu', () => {
    cy.get(disabledMenu) // Replace with the actual selector for the Disabled menu
      .should('have.attr', 'aria-disabled', 'true'); // Assert that the menu is disabled
  });
//});




