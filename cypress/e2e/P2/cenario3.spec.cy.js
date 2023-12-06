describe('Adição de Produtos ao Carrinho', () => {
    it('Adição de itens no carrinho', () => {

        cy.visit('https://saucedemo.com')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')

        cy.get('form').submit();

        cy.get('#add-to-cart-sauce-labs-backpack').first().click();

        cy.get('.shopping_cart_badge').should('have.text', '1');

        // Adicionar vários produtos ao carrinho
        cy.get('.inventory_item').each(($product) => {
            cy.wrap($product).click();
        });

        // Verificar se o resumo do carrinho reflete as adições
        cy.get('.shopping_cart_badge').should('have.text', '1');

        // Adicionar produtos até atingir o limite máximo
        for (let i = 0; i < 3; i++) {
            cy.get('.inventory_item').eq(i).click();
        }
    });
});


/*
    !0. Cenário 3: Adição de Produtos ao Carrinho
    !1. Testar a funcionalidade de adicionar produtos ao carrinho.
    !2. Verificar se os produtos são corretamente adicionados e refletidos no resumo do carrinho.
    !3. Testar o limite máximo de produtos que podem ser adicionados ao carrinho e verificar se o sistema está tratando corretamente essa condição.
*/