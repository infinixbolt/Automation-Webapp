describe("Calorie Tracker App", () => {
  before(() => {
    cy.visit("/tracalorie/");

    // Add six foods and their calorie values
    const meals = [
      { name: "Apple", calories: 52 },
      { name: "Banana", calories: 96 },
      { name: "Chicken Breast", calories: 165 },
      { name: "Salad", calories: 11 },
      { name: "Pizza", calories: 285 },
      { name: "Yogurt", calories: 150 },
    ];

    meals.forEach((meal) => {
      cy.get("#item-name").type(meal.name);
      cy.get("#item-calories").type(meal.calories);
      cy.get(".add-btn").click();
    });
  });
  const meallist = ".collection-item";
  const editButton = ".edit-item.fa.fa-pencil";
  const deleteButton = '.delete-btn';
  const updateButton = '.update-btn';

  it("should assert the total calorie value and food list", () => {
    // Assert the total calorie value
    cy.get(".total-calories").should("have.text", "759");

    // Assert the food list
    cy.get(meallist).should("contain", "Apple");
    cy.get(meallist).should("contain", "Banana");
    cy.get(meallist).should("contain", "Chicken Breast");
    cy.get(meallist).should("contain", "Salad");
    cy.get(meallist).should("contain", "Pizza");
    cy.get(meallist).should("contain", "Yogurt");

    
  //should remove two foods and assert the changes in the total calorie value and food list
     cy.get(meallist).contains("Apple").parent().find(editButton).click().get(deleteButton).click();
     cy.get(meallist).contains("Chicken Breast").parent().find(editButton).click().get(deleteButton).click();

    // Assert the updated total calorie value
    cy.get(".total-calories").should("have.text", "542");

    // Assert the updated food list
    cy.get(meallist).should("not.contain", "Apple");
    cy.get(meallist).should("not.contain", "Chicken Breast");


    

  //should update 1 foods and assert the changes in the total calorie value and food list
    cy.get(meallist).contains("Banana").parent().find(editButton).click();

  // Update the name and calorie value of the food item
    cy.get("#item-name").clear().type("Isiewu");
    cy.get("#item-calories").clear().type('200');

  // Click the save button to apply the changes
    cy.get(updateButton).click();

  // Assert that the updated food item is reflected correctly in the food list
    cy.get(meallist).should("not.contain", "Banana");
    cy.get(meallist).should("contain", 'Isiewu');
    cy.get(meallist).contains('Isiewu').parent().should("contain", '200 Calories');

  // Assert that the total calorie value updates
    cy.get(".total-calories").should("have.text", "646");
});

  });
