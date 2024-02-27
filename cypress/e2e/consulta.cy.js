/// <reference types="cypress" />

describe("Cenários Agi", () => {
  context("Consultas", () => {
    const Button = "input#search-field";
    it("Tc001 - Validar que a aplicação retorna para a página de pesquisa", () => {
      cy.visit("/");
      cy.get(Button).click({ force: true });
      cy.visit("https://blogdoagi.com.br/?s=");
      cy.contains(" Resultados encontrados para: ");
    })
  })
  it("Tc002 - Validar campo e-mail obrigatório p/ inscrição na Newsletter da página pesquisa", () => {
    cy.visit("https://blogdoagi.com.br/?s=");
    cy.get(".wp-block-button__link").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Preencha este campo.");
    })
  })
});
