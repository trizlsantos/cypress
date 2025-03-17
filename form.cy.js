/// <reference types="cypress" />

describe("Teste formulário de contato", () => {
    it("Deve acessar a página da aplicação", () => {
        cy.visit("./paginas/form.html")
    }) 
     it("Deve preencher todos os campos do formulário", () => {
        cy.visit("./paginas/form.html")
        cy.get('input[type ="text"]').type('João Silva');
        cy.get('input[type ="email"]').type("teste@teste.com");
        cy.get('textarea[name ="message"]').type("Oi, esta é uma mensagem.");
        cy.get('button[type ="submit"]').click();
        cy.get('#success-message').should('contain', 'Mensagem enviada com sucesso!');
     });
    
     it("Deve exibir mensagens de erro ao enviar com campos vazios", () => {
        cy.visit("./paginas/form.html")
        cy.get('input[type ="text"]:invalid').should('exist');
        cy.get('input[type ="email"]:invalid').should('exist');
        cy.get('textarea[name ="message"]:invalid').should('exist');
        cy.get('button[type ="submit"]').click();
      });
    });





