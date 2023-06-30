
describe('My IP Address', ()=>{

    it('visit the page', ()=>{
        cy.api('GET','/api/my-ip/').then((Response)=>{

            //Assert the status code
            expect(Response.status).to.eq(200)

            //Assert the keys exist
            const expectedKeys = ["ip", "city", "country", "timezone"];

            // Get the keys present in the JSON object
            const actualKeys = Object.keys(Response.body);

            // Assert that all expected keys exist
            expectedKeys.forEach((key) => {
            expect(actualKeys).to.include(key);

            
        })
    })
})
})