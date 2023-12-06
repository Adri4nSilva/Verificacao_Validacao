//Cenário 2
describe('Catálogo dos produtos', () => {
    it('produtos listados', () => {
        cy.visit('https://saucedemo.com')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')

        cy.get('form').submit();

        cy.get('.inventory_item').should('have.length.greaterThan', 5)

        cy.get('.inventory_item').each(($product) => {
            const productName = $product.find('.inventory_item_description').text();
            const productPrice = $product.find('.inventory_item_price').text()

            expect(productName).to.not.be.empty;
            expect(productPrice).to.match(/^\$\d+\.\d{2}$/);
        });

        // // (O código do login já deve ter sido executado)

        // // Clicar no botão de filtragem (substitua o seletor pelo correto)
        // cy.get('.product_sort_container').click(); // Substitua '.filter_button' pelo seletor real do botão de filtragem

        // // Verificar se as opções de filtragem são exibidas
        // cy.get('.product_sort_container').should('exist');

        // // Clicar na opção de filtrar por nome em ordem crescente (substitua o seletor pelo correto)
        // cy.get('.az').click(); // Substitua '.filter_option_name_asc' pelo seletor real da opção

        // // Verificar se os resultados estão consistentes e corretos após a aplicação do filtro
        // cy.get('.inventory_item').should('have.length.greaterThan', 0);

    })
})

/*
    ?1. O aluno deve verificar se todos os produtos exibidos no catálogo estão corretamente listados.
    ?2. Verificar se as informações dos produtos (nome, preço, imagem etc.) estão corretas e correspondem aos produtos exibidos na interface.
    ?3. Testar a funcionalidade de busca de produtos, verificando se os resultados são consistentes e corretos. - o site não possui busca de produtos

*/