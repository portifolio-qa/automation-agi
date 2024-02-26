/// <reference types="cypress" />
describe('home', () => {
  it('webapp On', () => {
    cy.visit('/')
    cy.title().should('eq', 'Blog do Agi | Tudo sobre empréstimo e educação financeira')
  })
})