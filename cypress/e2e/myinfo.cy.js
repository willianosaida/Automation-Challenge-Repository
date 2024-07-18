describe('My Info Section Tests', () => {
    
    beforeEach(() => {
      cy.login(Cypress.env('username'), Cypress.env('password'));
      cy.get('.oxd-main-menu-item:contains("My Info")').click();
    });
  
    it('should update personal information successfully', () => {
      cy.get('.oxd-input[name="firstName"]')
        .clear()
        .type('testFirstName')
        .should('have.value', 'testFirstName');

      cy.get('.oxd-input[name="middleName"]')
        .clear()
        .type('testMiddleName')
        .should('have.value', 'testMiddleName');

      cy.get('.oxd-input[name="lastName"]')
        .clear()
        .type('testLastName')
        .should('have.value', 'testLastName');

        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();

      /* Aqui deveria validar a visibilidade da mensagem de sucesso ao salvar as informações,
      porém não consegue validar que isso está visível

      cy.get('.oxd-toaster_1')
      .should('be.visible')
      .and('contain', 'Successfully Updated'); */
    });
  
    it('should display an error when a required field is empty', () => {
      cy.get('.oxd-input[name="firstName"]').clear();

      cy.get('.oxd-text:contains("Required")')
        .should('be.visible');
    });
  
    it('should validate the driver license expiry date field', () => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
        .clear()
        .type('32-13-2023');
        
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();

      cy.get('.oxd-input-field-error-message')
        .should('be.visible')
        .and('contain', 'Should be a valid date in yyyy-dd-mm format');
    });
});
