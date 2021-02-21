Cypress.Commands.add('checkForm', () => {
  cy.get('.submitBtn').should('be.disabled');
  cy.get('.modalBtn').should('be.enabled');
})
