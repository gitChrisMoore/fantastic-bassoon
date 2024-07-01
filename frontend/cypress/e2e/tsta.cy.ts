describe('Create user test', () => {
  before(() => {
  cy.fixture('common').then((data) => {
    cy.wrap(data).as('commonData');
  });
});
  it('passes', () => {
    cy.visit('http://localhost:5173/auth-signup')
  })
})