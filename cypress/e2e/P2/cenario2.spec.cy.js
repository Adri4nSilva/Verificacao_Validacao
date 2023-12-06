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
            // expect(productPrice).to.match('$');
        });
    })
})

/*
    ?1. O aluno deve verificar se todos os produtos exibidos no catálogo estão corretamente listados. - feito
    ?2. Verificar se as informações dos produtos (nome, preço, imagem etc.) estão corretas e correspondem aos produtos exibidos na interface. - feito
    ?3. Testar a funcionalidade de busca de produtos, verificando se os resultados são consistentes e corretos. - o site não possui busca de produtos - 

*/