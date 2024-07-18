describe('Login Page Tests', () => {
  it('should login with valid credentials', () => {
    cy.login('username', 'password');
    cy.url().should('include', '/index.php/dashboard');
  //  cy.logout();
  });

  it('should show error with invalid credentials', () => {
    cy.loginError('usernameInvalid', 'passwordInvalid');
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible').and('contain', 'Invalid credentials');
  });
});


  