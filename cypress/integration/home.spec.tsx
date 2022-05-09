import cypress from "cypress";

// <reference types="cypress"/>
context(`Home page user tests`, () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000`);
  });

  it(`should have title  and text indicating guest user section`, () => {
    cy.get(`h1`).should(`include.text`, `Next.js Project Starte`);
  });
});
