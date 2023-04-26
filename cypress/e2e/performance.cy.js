/// <reference types ="cypress"/>

describe('The App', () => {
  before(function () {
    cy.fixture('loginPass').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('audits the home page', () => {
    cy.lighthouse({
      performance: 50,
      accessibility: 50,
      'best-practices': 50,
      seo: 50,
      pwa: 50,
    });

    // TODO: bring back cy.pa11y();
  });

  it('audits the login page', () => {
    cy.loginLegoAccount(data.email, data.pass);

    cy.lighthouse({
      performance: 50,
      'first-contentful-paint': 3500,
      accessibility: 50,
      'best-practices': 50,
      seo: 50,
      pwa: 50,
    });

    // TODO: bring back cy.pa11y();
  });
});
