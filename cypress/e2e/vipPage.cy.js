/// <reference types ="cypress"/>

describe('E2E - Vip page - LEGO', () => {
  before(function () {
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
    cy.fixture('loginPass').then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit(url.vip);
    cy.url().should('eq', url.vip);
    cy.acceptEnterPopups();
  });

  it('should click on VIP button and verify url also verify buttons direction', () => {
    cy.get('[data-test="cta-link"]').click();
    cy.url().should('eq', url.join);
    cy.go('back');
    cy.get('[data-test="split-testing-section"]')
      .contains('Dołącz teraz')
      .click();
    cy.url().should('eq', url.join);
  });

  it('should correct log in to the lego account via vip page', () => {
    cy.get('[data-test="vip-overview-signin-link"]').click();
    cy.get('[data-test="vip-join-login-button"]').click();
    cy.loginOnlyPass(data.email, data.pass);
  });

  it('Click on each quicklinks in vip page, verify that the correct page is displayed', () => {
    // method by pageObject function

    const links = [
      { label: '[data-test="quicklink-link-0"]', url: url.terms2 },
      { label: '[data-test="quicklink-link-1"]', url: url.faq },
      { label: '[data-test="quicklink-link-2"]', url: url.vipWinners },
    ];

    links.forEach((link) => {
      cy.get(link.label).click({ force: true });
      cy.url().should('eq', link.url);
      cy.go('back');
    });
  });
});
