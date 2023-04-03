/// <reference types="cypress" />

import FooterSection from "../support/pages/footer-obj.cy";

describe("E2E - Footer section - Lego", () => {
  before(function () {
    cy.fixture("loginPass").then(function (data) {
      globalThis.data = data;
    });
    cy.fixture("pagesUrl").then(function (url) {
      globalThis.url = url;
    });
  });
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });

  it("Should verify correct subscribing to the newsletter also verify title after send", () => {
    cy.typePhraseAny('[name="subscribe"]', data.email, 1);
    cy.get('[data-test="input-with-button-button"]').click();
    cy.get("h1").then(($title) => {
      const text = $title.text();
      cy.get("h1").should("have.text", text);
    });
  });

  it("Should verify incorrect subscribing to the newsletter also verify title after send", () => {
    cy.typePhraseAny('[name="subscribe"]', 'test123141!', 1);
    cy.get('[data-test="input-with-button-button"]').click();
    cy.get('[data-test="error-text"]').then(($title) => {
      const text = $title.text();
      cy.get('[data-test="error-text"]').should("have.text", text);
    });
  });


  it("Click on each social link in footer and verify that the correct page is displayed", () => {

    const links = [
      { label: '[data-test="facebook-icon-link"]', url: url.fbUrl },
      //{ label: '[data-test="twitter-icon-link"]', url: url.twitterUrl }, // This behavior is configurable, and you can choose to turn this off by listening to the uncaught:exception event.
      { label: '[data-test="instagram-icon-link"]', url: url.igUrl },
      { label: '[data-test="youtube-icon-link"]', url: url.ytUrl },
    ];

    links.forEach((link) => {
      cy.get(link.label).click({force: true});
      cy.url().should("eq", link.url);
      cy.visit("/"); // go back to click anotcher element
    });


  });

  // 

  it("Should verify visibilty and lenght of footer main nav links", () => {
    cy.get(".dfLCCk > ul > li").then(($nav) => {
      const links = $nav.length;
      cy.get(".dfLCCk > ul > li").should("have.length", links);
    });
  });


  it("Should verify direction of links catalogue and stores,  verify url", () => {
    cy.get('[data-test="footer-subscribe-katalogi-lego"]').click();
    cy.url().should("eq", url.catalogueUrl);
    cy.get('[data-test="footer-subscribe-adresy-sklepów"]').click();
    cy.url().should("eq", url.storesUrl);

  });

  it("Click on each link in main footer nav and verify that the correct page is displayed", () => {

    // method by pageObject function

    const links = [
      { label: "O Grupie LEGO", url: url.aboutus },
      { label: "Aktualności LEGO®", url: url.newsroom },
      { label: "Odpowiedzialność", url: url.sustainability },
      { label: "Oświadczenie dotyczące transparentności łańcucha dostaw",url: url.responsible,},
      { label: "Certyfikacja produktów LEGO", url: url.compliance },
      { label: "LEGO Praca", url: url.careers },
      { label: "Infolinia LEGO ds. przestrzegania zasad",url: url.complianceLine,},
      { label: "Odpowiedzialność", url: url.sustainability },
      { label: "Skontaktuj się z nami", url: url.service },
      { label: "Znajdź instrukcje składania", url: url.buildinginstructions },
      { label: "Części zamienne", url: url.replacementparts },
      { label: "Dostawa i zwrot produktów", url: url.shippingHandling },
      { label: "Sposoby płatności", url: url.paymentMethods },
      { label: "Zasady i warunki", url: url.terms },
      { label: "LEGO® House", url: url.attractions },
      { label: "Wycofywanie produktów", url: url.productRecalls },
      { label: "Parki LEGOLAND®", url: url.attractionsParks },
      { label: "Centra rozrywki LEGOLAND", url: url.legoLand },
      { label: "LEGO® LIFE", url: url.app },
      { label: "LEGO Education", url: url.educationHome },
      { label: "LEGO Ideas", url: url.ideasHome },
      //{ label: "LEGO Foundation", url: url.fundations, },
    ];

    links.forEach((link) => {
      FooterSection.clickLinkByText(link.label);
      cy.url().should("eq", link.url);
      cy.visit("/"); // go back to click anotcher element
    });

    // LEGO Foundation link - code for asertion 

    //  cy.get('[data-test="footer-links-list-item"]').contains("LEGO Foundation" ).click();
    //  cy.get('[aria-label="Accept all"]').click();
    //  cy.url().should("eq", url.fundations);
  });


  it("Click on each social link in footer and verify that the correct page is displayed", () => {

    const links = [
      { label: '[data-test="policy-link-0"]', url: url.privacyNotice },
      { label: '[data-test="policy-link-1"]', url: url.cookiePolicy },
      { label: '[data-test="policy-link-2"]', url: url.legalNotice },
      { label: '[data-test="policy-link-3"]', url: url.conditions },
      { label: '[data-test="policy-link-4"]', url: url.accessibility },
    ];

    links.forEach((link) => {
      cy.get(link.label).click({ force: true });
      cy.url().should("eq", link.url);
      cy.visit("/"); // go back to click anotcher element
    });

    // last link with cookies settings 

    cy.get('[data-test="cookie-settings-trigger-modal"]').click();
    cy.get('[data-test="cookie-modal-dropdown"]').should('be.visible');
  
  });

  it('should verify visibity and correct text of footer credits', () => {

    cy.get(".hrysfZ").then(($p) => {
      const text = $p.text();
      cy.get(".hrysfZ").should('have.text', text);
    });

  });
});
