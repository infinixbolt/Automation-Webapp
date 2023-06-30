describe("My IP Address", () => {
  it("visit the page", () => {
    cy.api("GET", "/api/health-check/").then((Response) => {
      //Assert the status code
      expect(Response.status).to.eq(200);

      // Assert the keys and values
      const expectedKeyValues = {
        success: true,
        status: "UP",
        message: "API is up!",
      };

      // Assert that the response body matches the expected key-value pairs
      expect(Response.body).to.deep.equal(expectedKeyValues);
    });
  });
});
