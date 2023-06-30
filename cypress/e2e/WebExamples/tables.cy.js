
describe('Table Sorting', () => {
    beforeEach(() => {
      cy.visit('/tables');
    });
  
    it('Example 1: should sort the table by the First Name column', () => {
      // Sort the table by the First Name column
      cy.get('table th').contains('First Name').click(); // Sort in ascending order
  
      // Read and log the data from the first row
      cy.get('table tbody tr').first().invoke('text').then((firstRowData) => {
        cy.log('First Row Data:', firstRowData);
      });
  
      // Read and log the data from the last row
      cy.get('table tbody tr').last().invoke('text').then((lastRowData) => {
        cy.log('Last Row Data:', lastRowData);
      });
    });
  
     it('should sort the table by the First Name column', () => {
    // Sort the table by the First Name column
    cy.get('table#table2 th span.first-name').click(); // Sort in ascending order

    // Read and log the data from the first row
    cy.get('table#table2 tbody tr').first().invoke('text').then((firstRowData) => {
      cy.log('First Row Data:', firstRowData);
    });

    // Read and log the data from the last row
    cy.get('table#table2 tbody tr').last().invoke('text').then((lastRowData) => {
      cy.log('Last Row Data:', lastRowData);
    });
  });
});
  