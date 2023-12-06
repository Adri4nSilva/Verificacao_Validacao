describe('Adição de Produtos ao Carrinho', () => {
    it('Adição de itens no carrinho', () => {

        cy.visit('https://saucedemo.com')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')

        cy.get('form').submit();
        // Clicar no botão de adicionar ao carrinho de um produto específico (ajuste o seletor conforme necessário)
        cy.get('#add-to-cart-sauce-labs-backpack').first().click();

        // Verificar se o ícone do carrinho reflete a adição
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    it('Deve verificar se os produtos são corretamente adicionados e refletidos no resumo do carrinho', () => {
        // (O código do login já deve ter sido executado)

        // Clicar em vários botões de adicionar ao carrinho
        cy.get('.add_to_cart').first().click();
        cy.get('.add_to_cart').eq(1).click();
        cy.get('.add_to_cart').eq(2).click();

        // Verificar se o resumo do carrinho reflete as adições (ajuste o seletor conforme necessário)
        cy.get('.cart_list').should('have.length', 3);
    });

    // it('Deve testar o limite máximo de produtos no carrinho', () => {
    //     // Adicionar produtos até atingir o limite máximo
    //     for (let i = 0; i < 6; i++) {
    //         cy.get('.add_to_cart').eq(i).click();
    //     }
    //     // Verificar se uma mensagem de erro ou feedback apropriada é exibida (ajuste o seletor conforme necessário)
    //     cy.get('.error_message').should('exist');
    // });
});


/*
    !0. Cenário 3: Adição de Produtos ao Carrinho
    !1. Testar a funcionalidade de adicionar produtos ao carrinho.
    !2. Verificar se os produtos são corretamente adicionados e refletidos no resumo do carrinho.
    !3. Testar o limite máximo de produtos que podem ser adicionados ao carrinho e verificar se o sistema está tratando corretamente essa condição.
*/