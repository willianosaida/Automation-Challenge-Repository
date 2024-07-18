import 'cypress-xpath';


Cypress.Commands.add('login', () => {
    const username = Cypress.env('username');
    const password = Cypress.env('password');
   
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]')
    .type(username);
    cy.get('input[name="password"]')
    .type(password);
    cy.get('button[type="submit"]')
    .click();
  });

  Cypress.Commands.add('loginError', () => {
    const usernameInvalid = Cypress.env('usernameInvalid');
    const passwordInvalid = Cypress.env('passwordInvalid');

    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]')
    .type(usernameInvalid);
    cy.get('input[name="password"]')
    .type(passwordInvalid);
    cy.get('button[type="submit"]')
    .click();
  });

  Cypress.Commands.add('logout', () => {
    cy.get('span.oxd-userdropdown-tab')
    .click();
    cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a')
    .click();
  });
  