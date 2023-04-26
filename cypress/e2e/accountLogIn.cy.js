/// <reference types="cypress" />

// Please run this test only on electron browser, after set  chromeWebSecurity : false - elektron passed the test  :) other browser detected the bot session

describe('E2E - account tests', () => {
  before(function () {
    cy.fixture('loginPass').then(function (data) {
      globalThis.data = data;
    });
    cy.fixture('pagesUrl').then(function (url) {
      globalThis.url = url;
    });
  });
  beforeEach(() => {
    cy.visit('/');
    cy.acceptEnterPopups();
  });

  it('Should be correctly log in to Lego account ', () => {
    cy.loginLegoAccount(data.email, data.pass);
    cy.clickBtn('[fill-rule="nonzero"]');
    cy.url().should('eq', url.accountUrl); // hide this to use other borwser
    //cy.get("h1").should("contain", "interruption"); // not for electron browser
  });

  it('Should faild log in to Lego account ', () => {
    cy.loginLegoAccount(data.email, data.incorectPass);
    cy.get('.login-error').should('contain', 'hasło nie odpowiadają'); // hide this to use other borwser
    //cy.get("h1").should("contain", "interruption"); // not for electron browser
  });
});
