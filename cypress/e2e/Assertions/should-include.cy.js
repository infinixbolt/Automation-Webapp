
describe('Array and Object Inclusion Test', () => {
    it('should assert that an array includes a value', () => {
      const myArray = [1, 2, 3, 4, 5];
  
      cy.wrap(myArray).should('include', 3);
    });
  
    it('should assert that an object includes a key', () => {
        const myObject = { key1: 'value1', key2: 'value2', key3: 'value3' };
    
        cy.wrap(myObject).should('have.property', 'key2');
    });
  });
  