import { describe } from "mocha";

let boxALocator = '#column-a';
let boxBLocator = '#column-b';

// Assuming you have Cypress installed and have a test file set up

describe('Drag and drop boxes', () => {
  beforeEach(() =>{
    cy.visit('/drag-and-drop')
  });
  
  it('should switch positions of box A and B when dragging Box A onto Box B', () => {
    
        // to hold the data that is dragged during a drag-and-drop operation
        const dataTransfer = new DataTransfer();
    
          // getting "Box A", // triggering the "dragstart" event to initialize the dataTransfer object
          cy.get(boxALocator).trigger("dragstart", { dataTransfer });
    
          // getting "B",// dropping "B" into the "A" position defined in dataTransfer
          cy.get(boxBLocator).trigger("drop", { dataTransfer });
          
        // now "Box B" is in the first position, and you need to retrieve it again, // getting "B"
          cy.get(boxALocator).trigger("dragend").then(() => {
        // "A" should now be in the position of "B" and vice versa
          cy.get('#dnd-columns').then((elements) => {
            const text = elements.text().replace(/\s/g, "");
            expect(text).to.equal("BA");
        
            });
          });
      });

      it('should switch positions of box A and B when dragging Box B onto Box A', () => {
        // to hold the data that is dragged during a drag-and-drop operation
        const dataTransfer = new DataTransfer();
    
        // getting "Box B", // triggering the "dragstart" event to initialize the dataTransfer object
        cy.get(boxBLocator).trigger("dragstart", { dataTransfer });
    
        // getting "A" ,// dropping "A" into the "B" position defined in dataTransfer
        cy.get(boxALocator).trigger("drop", { dataTransfer });
    
        // now "Box A" is in the last position, and you need to retrieve it again, // getting "A"
        cy.get(boxALocator).trigger("dragend").then(() => {
          // "B" should now be in the position of "A" and vice versa
          cy.get('#dnd-columns').then((element) => {
            const text = element.text().replace(/\s/g, "");
            expect(text).to.equal("BA");
          });
        });
      });
    });  
























