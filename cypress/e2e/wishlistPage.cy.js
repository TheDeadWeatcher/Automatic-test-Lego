/// <reference types = "cypress"/>


describe("E2E - wishlist - LEGO", () => {
  before(function () {
    cy.fixture("pagesUrl").then(function (url) {
      globalThis.url = url;
    });
    cy.fixture("loginPass").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });


  it('should correct log in to lego account and verify url', () => {
   
    cy.get('[data-test="util-bar-wishlist"]').click();
    cy.get('[data-test="legoid-login-link"]').click();
    cy.loginOnlyPass(data.email, data.pass);
    cy.url().should('eq', url.homeUrl)
    // cy.go('back')
  });

});
