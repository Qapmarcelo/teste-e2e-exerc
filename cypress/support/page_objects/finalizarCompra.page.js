class CheckPage {
    visitarUrl() {
        cy.visit('produtos/')
    }

    /*  finalizarCompra(nome, sobreNome, endereço, cidade, cep, tel, email) {
           cy.get('#billing_first_name').clear().type(nome)
            cy.get('#billing_last_name').type(sobreNome)
            cy.get('#billing_address_1').type(endereço)
            cy.get('#billing_city').type(cidade)
            cy.get('#billing_postcode').type(cep)
            cy.get('#billing_phone').type(tel)
            cy.get('#billing_email').type(email)
}    
            */
}



export default new CheckPage()