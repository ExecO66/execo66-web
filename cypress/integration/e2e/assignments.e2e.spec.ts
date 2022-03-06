/// <reference types="cypress" />

describe(" Assignments Page : e2e", () => {
  beforeEach(() => {
    cy.login();

    cy.visit("http://localhost:3000/assignments");
  });

  it("test", () => {
    cy.get("[data-test='assignment:item']").should("have.length", 3);
  });
});
