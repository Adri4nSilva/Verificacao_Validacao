//Cenário 4
describe('Finalização de Compra', () => {
    it('Fluxo de finalização', () => {
        cy.visit('https://saucedemo.com')
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')

        cy.get('form').submit();

        cy.get('#add-to-cart-sauce-labs-backpack').should('not.have.text', '0');
        cy.get('#checkout-button').click();

        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html');

        cy.get('#first-name').type('Adrian')
        cy.get('#last-name').type('Silva')
        cy.get('#postal-code').type('00000000')
        cy.get('#continue').first().click();

        cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html')
        cy.get('#finish').first().click();


        cy.get().click();

        cy.url().should('include', '/https://www.saucedemo.com/checkout-complete.html');
    })
})


/*
    TODO. Cenário 4: Finalização da Compra
    TODO. 1. Verificar se o fluxo de finalização da compra está funcionando corretamente.
    TODO. 2. Testar diferentes métodos de pagamento (cartão de crédito, PayPal, etc.) e verificar se os dados são corretamente processados. - desconsiderado
    TODO. 3. Verificar se os produtos selecionados são exibidos corretamente no resumo da compra e no ecibo final.
*/

/**


  it('Deve testar diferentes métodos de pagamento e verificar se os dados são corretamente processados', () => {
    // Executar ações para adicionar produtos ao carrinho e ir para a página de pagamento
    // Certificar-se de que o carrinho esteja não vazio
    cy.get('.shopping_cart_badge').should('not.have.text', '0');
    cy.get('#checkout-button').click();

    // Escolher método de pagamento (exemplo: cartão de crédito)
    cy.get('#credit-card-option').click();

    // Preencher informações do cartão de crédito (ou usar um cartão de teste, dependendo do ambiente de teste)
    cy.get('#card-number').type('1234567890123456');
    cy.get('#expiration-date').type('12/24');
    cy.get('#cvv').type('123');

    // Clicar no botão de finalizar compra
    cy.get('#finish-button').click();

    // Verificar se a página de confirmação de compra é exibida
    cy.url().should('include', '/confirmation');
  });

  it('Deve verificar se os produtos selecionados são exibidos corretamente no resumo da compra e no recibo final', () => {
    // Executar ações para adicionar produtos ao carrinho e ir para a página de pagamento
    // Certificar-se de que o carrinho esteja não vazio
    cy.get('.shopping_cart_badge').should('not.have.text', '0');
    cy.get('#checkout-button').click();

    // Verificar se os produtos selecionados estão presentes na página de resumo da compra
    cy.get('.product_name').should('have.length.greaterThan', 0);

    // Clicar no botão de finalizar compra
    cy.get('#finish-button').click();

    // Verificar se os produtos selecionados estão presentes no recibo final
    cy.get('.confirmation_products').should('have.length.greaterThan', 0);
  });
});

 */