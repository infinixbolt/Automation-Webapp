describe('Geolocation Test', () => {
    it('Retrieves and verifies latitude and longitude', () => {
      cy.visit('/geolocation');
  
      cy.get('#geoBtn').click();
  
      // Wait for the latitude and longitude to appear on the page
      cy.get('#lat-value').should('be.visible').then(($latitudeElement) => {
        const displayedLatitude = parseFloat($latitudeElement.text());
  
        cy.get('#long-value').should('be.visible').then(($longitudeElement) => {
          const displayedLongitude = parseFloat($longitudeElement.text());
  
          cy.window().then((win) => {
            win.navigator.geolocation.getCurrentPosition((position) => {
              const dynamicLatitude = position.coords.latitude;
              const dynamicLongitude = position.coords.longitude;
  
              // Verify the displayed latitude and longitude with the dynamically retrieved values
              expect(displayedLatitude).to.be.closeTo(dynamicLatitude, 0.001);
              expect(displayedLongitude).to.be.closeTo(dynamicLongitude, 0.001);
            });
          });
        });
      });
    });
  });
  