import { describe } from "mocha";

//DOM Selectors
let yellowLabel = "#chrome-cpu";

describe("Web Inputs", () => {
  beforeEach(() => {
    cy.visit("/dynamic-table");
  });

it("compare chrome CPU load", () => {
    // Locate the row in the table corresponding to the Chrome process
    cy.contains("td", "Chrome").parent("tr").as("chromeRow");

    // Find the column index of the "CPU" header
    cy.get("th").contains("CPU").invoke("index").as("cpuColumnIndex");

    // Extract the CPU load value from the table for the Chrome process
    cy.get("@chromeRow").find("td").then((tdElements) => {
      cy.get("@cpuColumnIndex").then((cpuColumnIndex) => {
        const cpuLoadValue = tdElements[cpuColumnIndex].innerText;
        const numericCpuLoadValue = parseFloat(cpuLoadValue); // Extract numeric portion
        cy.wrap(numericCpuLoadValue).as("cpuLoadValue");
      });
    });

    // Extract the CPU load value from the yellow label
    cy.get(yellowLabel).invoke("text").as("yellowLabelValue");
  
// Compare the extracted CPU load values from the table and the yellow label using Cypress assertions
cy.get("@cpuLoadValue").then((cpuLoadValue) => {
    cy.get("@yellowLabelValue").then((yellowLabelValue) => {
      const expectedCpuLoadValue = 'Chrome CPU: ' + cpuLoadValue + '%';
      expect(yellowLabelValue).to.equal(expectedCpuLoadValue);
    });
  });
  
    
  });
});

