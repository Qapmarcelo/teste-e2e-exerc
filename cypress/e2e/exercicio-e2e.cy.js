/// <reference types="cypress" />
import finalizarCompraPage from "../support/page_objects/finalizarCompra.page";
import CheckPage from "../support/page_objects/finalizarCompra.page"


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/')

    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProdutos('S', 'Blue', 1)
        cy.addProdutos('L', 'Green', 2)
        cy.addProdutos('M', 'Red', 1)
        cy.contains('Ver carrinho').click()
        cy.contains('Concluir compra').click()
        cy.get('#billing_first_name').clear().type('Marcelo')
        cy.get('#billing_last_name').type('Leite')
        cy.get('#billing_address_1').type('Rua Teste n.10')
        cy.get('#billing_city').type('Jaguariúna')
        cy.get('#billing_postcode').type('14912112')
        cy.get('#billing_phone').type('01912344321')
        cy.get('#billing_email').type('marcelo@teste.com')
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })

})    