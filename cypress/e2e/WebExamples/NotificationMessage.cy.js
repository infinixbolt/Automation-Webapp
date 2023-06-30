import { describe } from "mocha";

//DOM Selectors
let notificationPanel = '#flash';
let clickHereButton = '.container > p > a';


describe("Notification Message", () =>{
    beforeEach(() =>{
        cy.visit('/notification-message-rendered');
    });

it("verify notification message",() =>{
    cy.get(clickHereButton).click();
    cy.get(notificationPanel).should(($element) => {
        const text = $element.text();
        expect(text.includes('Action successful') || text.includes('Action unsuccessful, please try again')).to.be.true;
      });
      
});

});