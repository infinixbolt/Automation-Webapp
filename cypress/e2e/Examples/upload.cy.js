import { describe } from "mocha";

let chooseFileButton = '#file-upload';
let uploadButton = '#file-submit';
let alert = 'h1';
let container = '#flash';

describe("file upload", () => {
  beforeEach(() => {
    cy.visit("/upload");
  });

  it('should upload file below 500KB', () => {
    cy.get(chooseFileButton).selectFile('cypress/fixtures/uploadTestData/300KiB.bin');
    cy.get(uploadButton).click();
    cy.get(alert).then((elements) => {
      const text = elements.text().replace(/\s/g, " ");
      expect(text).to.equal("File Uploaded!");
  });
});

  it('should upload 500KB file', () => {
    cy.get(chooseFileButton).selectFile('cypress/fixtures/uploadTestData/500KiB.bin')
    cy.get(uploadButton).click();
    cy.get(container).then((elements) => {
      const text = elements.text().trim();//replace(/\s/g, " ");
      expect(text).to.equal("MulterError: File too large");
  });
});

  it('should upload files above 500KB', () => {
    cy.get(chooseFileButton).selectFile('cypress/fixtures/uploadTestData/800KiB.bin')
    cy.get(uploadButton).click();
    cy.get(container).then((elements) => {
      const text = elements.text().trim();//replace(/\s/g, " ");
      expect(text).to.equal("MulterError: File too large");
  });
});
});



/**The second code snippet is more elaborate, simulating the file upload process by creating a temporary file 
 * and programmatically attaching it to the file input element, making it more 
 * flexible in case there is no built-in support for file upload. */  

//   it('Uploads a file from the fixtures folder', () => {
//     cy.visit('/upload') // Replace with your actual upload page URL

//     // Retrieve the file from the fixtures folder
//     cy.fixture('uploadTestData/300KiB.bin').then((fileContent) => {
//       // Convert the file content into a Blob object
//       const blob = new Blob([fileContent], { type: 'text/plain' });

//       // Create a temporary file to attach
//       cy.window().then((win) => {
//         const file = new win.File([blob], '300KiB.bin');

//         // Select the file input element and attach the file
//         cy.get('input[type="file"]').then((input) => {
//           cy.wrap(input).trigger('change', { force: true }).then(() => {
//             const dataTransfer = new win.DataTransfer();
//             dataTransfer.items.add(file);
//             input[0].files = dataTransfer.files;
//           });
//         });
      
