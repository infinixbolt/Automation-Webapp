

describe('BMI Calculation Test', () => {
  beforeEach(() => {
    cy.visit('/bmi');
  });

  it('Calculates BMI using the formula', () => {
    // Test details
    const gender = 'Male';
    const age = 35;
    const height = 180;
    const weight = 70;

    // Calculate the expected BMI result and its formatted value
    const heightInMeters = height / 100;
    const expectedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    const expectedBMIFormatted = `${expectedBMI} kg/m2`;

    // Fill in the form with the test details
    cy.get('#gender').select('Male');
    cy.get('#age').clear().type(age);
    cy.get('#height').clear().type(height);
    cy.get('#weight').clear().type(weight);

    // Submit the form
    cy.get('.btn-primary').click();

    cy.wait(2000);

    // Assert that the calculated BMI matches the expected result and has the correct formatting
    cy.get('#BMI').invoke('text').should('contain', `Your BMI is ${expectedBMIFormatted}`);
  });

  it('Shows an error when a field is empty', () => {
    // Submit the form without filling in any fields
    //cy.get('#gender').select(gender);
    cy.get('#age').clear();
    cy.get('#height').clear();
    cy.get('#weight').clear();
    cy.get('.btn-primary').click();

    // Assert that an error message is displayed
    cy.get('.alert-box').should('be.visible').and('contain', 'Please provide all the necessary information!');
  });
});
