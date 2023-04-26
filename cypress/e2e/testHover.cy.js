/// <reference types="cypress" />

// this test was created for checking only  (hover elements or hidden)

describe('E2E - test for triigger commands', () => {
  it('Should be correctly log in to Lego account ', () => {
    cy.visit('https://www.amazon.com/');
    cy.get('.nav-line-2 ').contains('Account & Lists').trigger('mouseover');
    cy.get('.nav-text').contains('Create a List').click();
  });
});

// working well :)
