Cypress.Commands.add("login", () => {
  cy.request(
    "http://localhost:8080/auth/dev/00000000-0000-0000-0000-000000000001"
  );
});
