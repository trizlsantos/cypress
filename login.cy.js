/// <reference types="cypress" />

describe("Meu primeiro teste", () => {
    it("visita a pagina de login.", () => {
        cy.visit("./paginas/login.html") 

        cy.get('[type="email"]').type("teste@teste.com")
    })
})

describe.only('first', () => { second })