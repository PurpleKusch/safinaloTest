Cypress.Commands.add('login', () => {
  
    cy.visit('https://poetry.ge/'); 
cy.get('a[href="/auth/login"]').click()
cy.get('#us').type('herrscom@gmail.com')
cy.get('#ps').type('Vajiko1.')
cy.get('.button').click()
})
;