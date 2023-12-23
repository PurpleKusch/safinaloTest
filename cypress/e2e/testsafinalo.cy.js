describe('Reg', () => {
  it('should use Fixture Data', () => {
    cy.fixture('test').then((test) => {
      const { name, title, address, email, password } = test.user;
      
      cy.visit('https://poetry.ge/');
      cy.get('a[href="/auth/register"]').click()
      cy.get('#g_name').type(name);
      cy.get('#title').type(title);
      cy.get('#url').type(address);
      cy.get('#g_mail').type(email);
      cy.get('#g_pass').type(password);

    });
  });
});



describe('adddiary', () => {
  it('passes', () => {
    cy.visit('https://poetry.ge/')
    cy.login();
    cy.get('a[href="/publish/creation"]').click()
    cy.get('a[href="/publish/new"]').click()
    cy.get('#pt-title').type('testPoetry')
    cy.get('.fixed-width.poemTxt').type('პატარა ვაჟა ტესტავდა')
    cy.get('.button').click()
  })
});


describe('editdiary', () => {
  it('passes', () => {
    cy.visit('https://poetry.ge/')
    cy.login();
    cy.get('a[href="/publish/creation"]').click()
    cy.get('a[href="edit?id=40229"]').click()
    cy.get('#pt-content').clear()
    cy.get('#pt-content').type('ეს პოეზია არაა')
  
  })
});

describe('deldiary', () => {
  it('passes', () => {
    cy.visit('https://poetry.ge/')
    cy.login();
    cy.get('a[href="/publish/creation"]').click()
    cy.get('a[href="remove?id=40233"]').click()
  
  
  })
});

describe('addcommentar', () => {
  it('passes', () => {
    cy.visit('https://poetry.ge/')
    cy.login();
    cy.get('a[href="/pages/vaja-amashukelivajaamas/poems/5-testpoetry"]').click()
    cy.get('.commenterTextBox').type('this is not a poetry')
    cy.get('.btn-back.commenterButton').click()
   
  })
});


