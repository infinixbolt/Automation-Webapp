import { describe } from "mocha";

let ipv4Locator  = "#ipv4";
let ipv6Locator  = "#ipv6";
let countryLocator  = "#country";
let cityLocator  = "#city";
let timezoneLocator  = "#timezone";

describe("match the IP address", () => {
  beforeEach(() => {
    cy.visit("/my-ip");
  });

  it("system IP should match the IP address displayed on the website", () => {
    // Retrieve the geolocation data displayed on the website
    cy.get(ipv4Locator).invoke('text').then((websiteIPv4) => {
      
    cy.get(ipv6Locator).invoke('text').then((websiteIPv6) => { 
          
    cy.get(countryLocator).invoke('text').then((websiteCountry) => { 
  
    cy.get(cityLocator).invoke('text').then((websiteCity) => { 
          
    cy.get(timezoneLocator).invoke('text').then((websiteTimezone) => {
              
    // Retrieve your system's geolocation data from the API
    cy.request('GET', 'http://ip-api.com/json').its('body').then((response) => {
        const systemIPv4 = response.query;
        const systemIPv6 = response.ipv6;
        const systemCountry = response.country;
        const systemCity = response.city;
        const systemTimezone = response.timezone;

    // Extract the values without keys from the website geolocation data
        const websiteIPv4Value = websiteIPv4.replace('IPv4:', '').trim();
        const websiteIPv6Value = websiteIPv6.replace('IPv6:', '').trim();
        const websiteCountryValue = websiteCountry.replace('Country:', '').trim();
        const websiteCityValue = websiteCity.replace('City:', '').trim();
        const websiteTimezoneValue = websiteTimezone.replace('TimeZone:', '').trim();


    // Compare the system geolocation data with the website geolocation data
      expect(systemIPv4).to.equal(websiteIPv4Value.trim());
      //expect(systemIPv6).to.equal(websiteIPv6Value.trim());
      expect(systemCountry).to.equal(websiteCountryValue.trim());
      expect(systemCity).to.equal(websiteCityValue.trim());
      expect(systemTimezone).to.equal(websiteTimezoneValue.trim());
});
              });
          });
      });
  });
});
});
});