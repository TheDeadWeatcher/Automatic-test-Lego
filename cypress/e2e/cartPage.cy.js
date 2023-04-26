/// <reference types="cypress"/>

describe('E2E - cart page - LEGO', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });

  beforeEach(() => {
    cy.visit(url.pluszowyVaderUrl);
    cy.acceptEnterPopups();
    cy.get('[data-test="add-to-bag"]').should('be.visible').click();
    cy.get('[data-test="view-my-bag"]').click();
    cy.url().should('eq', url.cartUrl);
  });

  it('Should add produkt to basket, click on cart icon and verify url also verify last price', () => {
    cy.get('.dVnvUT').click();
    cy.get('span.epIXnJ')
      .contains('119,99 zł')
      .then(($price) => {
        const price = $price.text();
        cy.get('span.epIXnJ').contains('119,99 zł').should('have.text', price);
      });
  });

  it('Should add incorrect sale code and verify title also delete product from basket and verify title', () => {
    cy.get('h3').contains('Dodaj kod promocyjny / kod rabatowy VIP').click();
    cy.typePhraseAny('#promoCodeAccordion-accordion-content', '1234{enter}', 1);
    cy.get('#-input-error').then(($al) => {
      const text = $al.text();
      cy.get('#-input-error').should('have.text', text);
    });
    cy.get('[data-test="remove-from-cart"]').click();
    cy.get('h1').then(($h1) => {
      const title = $h1.text();
      cy.get('h1').should('have.text', title);
    });
  });
});
