import { describe } from "mocha";
const path = require('path');

const filesToDownload = [
  {
    downloadElementLocator: '[href="download/1678797000672_2023-03-04_223322.png"]',
    fileName: '1678797000672_2023-03-04_223322.png',
  },
  {
    downloadElementLocator: '[href="download/cdct.jpg"]',
    fileName: 'cdct.jpg',
  },
  {
    downloadElementLocator: '[href="download/some-file.json"]',
    fileName: 'some-file.json',
  },
  {
    downloadElementLocator: '[href="download/some-file.txt"]',
    fileName: 'some-file.txt',
  },
  {
    downloadElementLocator: '[href="download/wdio.png"]',
    fileName: 'wdio.png',
  }
];

describe("file download", () => {
  beforeEach(() => {
    cy.visit("/download");
  });

  it('download all files and assert they are in the cypress/download folder', () => {
    filesToDownload.forEach((fileInfo) => {
      const fileName = fileInfo.fileName;
      const downloadPath = path.join('cypress', 'downloads', fileName);
      cy.get(fileInfo.downloadElementLocator).then(($element) => {
      const downloadUrl = $element.attr('href');
      cy.request({url: downloadUrl,method: 'GET',encoding: 'binary',}).then((response) => {
      cy.writeFile(downloadPath, response.body, 'binary');
      cy.readFile(downloadPath).should('exist');
        });
      });
    });
  });
});
