
describe('Inspect HTTP Headers', () => {
    it('should display and log all HTTP headers', () => {
      // Send a request to the page you want to inspect
      cy.request('GET', '/http-headers')
        .then((response) => {
          // Access the response headers
          const headers = response.headers;
  
          // Log and verify all headers
          Object.keys(headers).forEach((key) => {
            const value = headers[key];
            cy.log(`${key}: ${value}`);
            // Add assertions to verify the headers if needed
          });
        });
    });
  });
  