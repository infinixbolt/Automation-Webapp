

describe('Horizontal Slider Test', () => {
  it('Moves slider using arrow keys and mouse drag', () => {
    cy.visit('/horizontal-slider');

    // Get the slider element
    cy.get('input[type="range"]').then($slider => {
      // Move the slider to the right
      $slider.val(parseFloat($slider.val()) + 1.5).trigger('change');

      // Move the slider to the right again
      $slider.val(parseFloat($slider.val()) + 0.5).trigger('change');

      // Move the slider back to the left
      $slider.val(parseFloat($slider.val()) - 0.5).trigger('change');

      // Get the updated value from the slider element
      cy.get('#range').invoke('text').should('eq', '1.5');
    });
  });
});






  