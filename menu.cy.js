/// <reference types="cypress" />

describe("Verificar links do menu de navegação", () => {
    it('Deve acessar a página da aplicação', () =>{
       cy.visit("./paginas/menu.html");
    })
})

it("visita a página de link sobre", () => {
    cy.visit("./paginas/menu.html")

    cy.get(':nth-child(1) > a').click();
    cy.go('back');
});

it("visita a página de link sobre", () => {
    cy.visit("./paginas/menu.html")

    cy.get(':nth-child(2) > a').click();
    cy.go('back');
});

it("visita a página de link serviço", () => {
    cy.visit("./paginas/menu.html")

    cy.get(':nth-child(3) > a').click();
    cy.go('back');
})

it("visita a página de link contato", () => {
    cy.visit("./paginas/menu.html")

    cy.get(':nth-child(4) > a').click();
    cy.go('back');
})


