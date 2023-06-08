// //I am going to install and use the cypress-drag-drop plugin for this drag and drop as opposed to the cypress dragstart method previously used in the "DragAndDrop.cy.js" in this repository

import { describe } from "mocha";
import '@4tw/cypress-drag-drop';

let redCircleLocator = '.red';
let greenCircleLocator = '.green';
let blueCircleLocator = '.blue';
let canLocator = '#target';
let circleParentContainer = '#source';

describe("Drag and drop the circles in the can", () =>{
        beforeEach(() =>{
           cy.visit('/drag-and-drop-circles');
       });
    
       it('Drag the green, blue and red circles into the can', () =>{
const dataTransfer = new DataTransfer();
    
// getting "Green Circle", // triggering the "dragstart" event to initialize the dataTransfer object
cy.get(greenCircleLocator).trigger("dragstart", { dataTransfer });
// getting "Green",// dropping "Green Circle" into the can defined in dataTransfer
cy.get(canLocator).trigger("drop", { dataTransfer });

// Assert that the green circle is no longer present in the original container
cy.get(circleParentContainer).within(() => {
cy.get(greenCircleLocator).should('not.exist');});

// Assert that the green circle is now inside the can container
cy.get(canLocator).within(() => {
cy.get(greenCircleLocator).should('exist');});



// getting "Blue Circle", // triggering the "dragstart" event to initialize the dataTransfer object
cy.get(blueCircleLocator).trigger("dragstart", { dataTransfer });
// getting "Blue Circle",// dropping "Blue circle" into the "Can"
cy.get(canLocator).trigger("drop", { dataTransfer });

// Assert that the blue circle is no longer present in the original container
cy.get(circleParentContainer).within(() => {
cy.get(blueCircleLocator).should('not.exist');});
    
// Assert that the blue circle is now inside the can container
cy.get(canLocator).within(() => {
cy.get(blueCircleLocator).should('exist');});



// getting "Red Circle", // triggering the "dragstart" event to initialize the dataTransfer object
cy.get(redCircleLocator).trigger("dragstart", { dataTransfer });
// getting "Red Circle",// dropping "Red Circle" into the "Can"
cy.get(canLocator).trigger("drop", { dataTransfer });

// Assert that the red circle is no longer present in the original container
cy.get(circleParentContainer).within(() => {
cy.get(redCircleLocator).should('not.exist');});
    
// Assert that the red circle is now inside the can container
cy.get(canLocator).within(() => {
cy.get(redCircleLocator).should('exist');});


  });
});

