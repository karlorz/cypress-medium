describe("Our first test", () => {
  it("should go to our sample react app", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Cypress testing with Husky pre-commit hooks");
  });
  it("should see that the submit button is disabled", () => {
    cy.checkForm();
  });
  it("should enter some incorrect email value - submit should be disabled and modal should be enabled", () => {
    cy.get("#formBasicEmail").type("test");
    cy.checkForm();
  });
  it("should enter some password value - submit should be disabled and modal should be enabled", () => {
    cy.get("#formBasicPassword").type("testpasswd");
    cy.checkForm();
  });
  it("should check the box - submit should be enabled and modal should be disabled", () => {
    cy.get("#formBasicCheckbox").click();
    cy.get(".submitBtn").should("be.enabled");
    cy.get(".modalBtn").should("be.disabled");
  });
});

describe("URL validation", () => {
  it("should click the submit button and it should error", () => {
    cy.get(".submitBtn").click();
  });
  it("should enter a correct value and go to the ? page", () => {
    cy.get("#formBasicEmail").type("@test.com");
    cy.get(".submitBtn").click();
    cy.url().should("include", "/?");
  });
  it("should check form and bring up the modal", () => {
    cy.checkForm();
    cy.get(".modalBtn").click();
  });
  it("should click the link and redirect to a new page", () => {
    cy.get('a').click();
    cy.url().should('include', 'github.com')
  })
});
