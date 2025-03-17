/// <reference types="cypress" />

describe("Testes da Página de Login", () => {
    // Primeiro caso de teste: verifica se a página de login é acessada corretamente
    it("Deve visitar a página de login", () => {
        cy.visit("./paginas/login.html"); // Acessa a página de login

        // Verifica se o campo de e-mail está visível
        cy.get('[type="email"]').should('be.visible');
    });

    // Caso de teste: realiza login com credenciais válidas
    it("Deve preencher os campos de login com dados válidos", () => {
        cy.visit("./paginas/login.html");

        // Preenche o campo de e-mail
        cy.get('[type="email"]').type("teste@teste.com");

        // Preenche o campo de senha
        cy.get('[type="password"]').type("senha123");

        // Clica no botão "Entrar"
        cy.get('button[type="submit"]').click();

        // Verifica se o login foi bem-sucedido e redirecionou
        cy.url().should('include', '/dashboard'); // Verifica se a URL contém '/dashboard'
    });

    // Caso de teste: tenta fazer login com dados inválidos
    it("Deve exibir mensagem de erro com credenciais inválidas", () => {
        cy.visit("./paginas/login.html");

        // Preenche o campo de e-mail com um dado inválido
        cy.get('[type="email"]').type("email@invalido.com");

        // Preenche o campo de senha com uma senha incorreta
        cy.get('[type="password"]').type("senhaerrada");

        // Clica no botão "Entrar"
        cy.get('button[type="submit"]').click();

        // Verifica se a mensagem de erro é exibida
        cy.get('.error-message').should('contain', 'Credenciais inválidas!');
    });
});


