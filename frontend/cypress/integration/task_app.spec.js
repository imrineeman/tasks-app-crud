describe('Task app', () => {
  it('Front page can be opened', () => {
    cy.visit('http://localhost:3000');
  });
  it('Clear database', () => {
    cy.request('http://localhost:3005/testing/reset');
  });
  it('"New task" form can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('New').click();
  });

  it('Task form can be submitted', () => {
    cy.get('#taskName').type('Cypress Task');
    cy.get('#taskDescription').type('Testing with cypress!');
    cy.get('#submitButton').click();
  });

  it('Task form submission works without refresh, toggling taskCard works', () => {
    cy.contains('Cypress Task').click();
    cy.contains('Testing with cypress!');
  });
  it('Task editing works without refresh', () => {
    cy.get('#editButton').click();
    cy.get('#taskName').clear().type('Editing Task!');
    cy.get('#taskDescription').clear().type('Testing edit!');
    cy.get('#submitButton').click();
    cy.contains('Editing Task!');
  });
  it('Check that everything is saved to db by reloading page', () => {
    cy.reload();
    cy.contains('Editing Task!');
  });
  it('Clear database again', () => {
    cy.request('http://localhost:3005/testing/reset');
  });
});
