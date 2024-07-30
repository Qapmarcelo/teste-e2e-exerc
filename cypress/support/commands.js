Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('addProdutos',
    (tamanho, cor, qtde, nome, sobreNome, endereço, cidade, cep, tel, email,) => {
        cy.visit('produtos/')
        cy.get('[class="product-block grid"]').first().click()
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(qtde)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items')

    })




