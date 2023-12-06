//cenário 1
describe('Fluxo de login', () => {
  it('passes', () => {
    cy.visit('https://saucedemo.com')
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')

    cy.get('form').submit();

    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    cy.get('#react-burger-menu-btn').should('exist').click();
    cy.get('#shopping_cart_container').should('exist').click();
    cy.get('#continue-shopping').should('exist').click();
    cy.get('#item_4_title_link').should('exist').click();
    cy.get('#back-to-products').should('exist').click();
    cy.get('#add-to-cart-sauce-labs-backpack').should('exist').click();
  })
})

/*
  *0. Cenário 1: Login e Navegação
  *1. Você deve testar o fluxo de login no Sauce Demo.
  *2. Verificar se o usuário é redirecionado corretamente para a página inicial após o login.
  *3. Verificar se o menu de navegação está funcionando corretamente, permitindo a transição entre diferentes páginas.
  *4. Verificar se os elementos de navegação (links, botões etc.) estão corretamente posicionados e funcionais em todas as páginas
*/