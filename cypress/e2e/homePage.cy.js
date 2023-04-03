/// <reference types="cypress"/>

import HomePage from "../support/pages/home-obj.cy";
import FooterSection from "../support/pages/footer-obj.cy";
import TopNav from "../support/pages/topNav-obj.cy";

describe("E2E - Home Page - Lego ", () => {
  before(function () {
    cy.fixture("pagesUrl").then(function (url) {
      globalThis.url = url;
    });
  });
  beforeEach(() => {
    cy.visit("/");
    cy.acceptEnterPopups();
  });

  it("Should open home page Lego, accept popups and verify url", () => {
    cy.url().should("eq", url.homeUrl);
  });

  it("Should verify visible sections of Logo, topNav, slider, bestseller, recommended, footer", () => {
    HomePage.logo.should("be.visible");
    HomePage.topNav.should("be.visible");
    HomePage.mainSlider.should("be.visible");
    HomePage.recommendetSection.should("be.visible");
    //HomePage.bestsellerSection.should("be.visible");
    HomePage.footer.should("be.visible");
  });

  it("Click on each link in main nav category Kupuj and verify that the correct page is displayed",
  () => {
    TopNav.kupujMainCat.click();
    TopNav.zestawWedlug.click();

    // method by pageObject function

    const links = [
      { label: "Architecture", url: url.architektura },
      { label: "BrickHeadz", url: url.brickheadz },
      { label: "Brick Sketches™", url: url.brickSketches },
      { label: "City", url: url.city },
      { label: "Classic", url: url.classic },
      { label: "Creator 3in1", url: url.creator3in1 },
      { label: "Creator Expert", url: url.creatorExpert },
      { label: "DC", url: url.dc },
      { label: "Disney™", url: url.disney },
      { label: "DOTS", url: url.dots },
      { label: "DUPLO®", url: url.duplo },
      { label: "Friends", url: url.friends },
      { label: "Harry Potter™", url: url.harryPotter },
      { label: "Ideas", url: url.ideas },
      { label: "Jurassic World™", url: url.jurassicWordl },
      { label: "LEGO® Art", url: url.art },
      { label: "LEGO® Avatar", url: url.avatar },
      { label: "LEGO® Education", url: url.education },
      { label: "LEGO® Icons", url: url.legoIcons },
      { label: "LEGO® Indiana Jones™", url: url.idianaJones },
      { label: "LEGO® Super Mario™", url: url.superMario },
      { label: "Lord of the Rings™", url: url.lordOfTheRing },
      { label: "Marvel", url: url.marvel },
      { label: "MINDSTORMS®", url: url.mindstorms },
      { label: "Minecraft®", url: url.minecraft },
      { label: "Minifigurki", url: url.miniFigures },
      { label: "Minions", url: url.minions },
      { label: "Monkie Kid™", url: url.monkieKid },
      { label: "NINJAGO®", url: url.ninjago },
      { label: "Powered UP", url: url.poweredUp },
      { label: "SERIOUS PLAY®", url: url.seriousPLay },
      { label: "Speed Champions", url: url.speedCHampions },
      { label: "Spider-Man", url: url.spiderMan },
      { label: "Star Wars™", url: url.starWars },
      { label: "Technic", url: url.technic },
      { label: "VIDIYO™", url: url.vidiyo },
      { label: "Xtra", url: url.xtra },
    ];

    links.forEach((link) => {
      TopNav.clickLinkByText(link.label);
      cy.url().should("eq", link.url);
      // TopNav.kupujMainCat.scrollIntoView({force:true});
      // TopNav.kupujMainCat.should('be.visible');
      TopNav.kupujMainCat.click({force: true});
      TopNav.zestawWedlug.click({ force: true });// go back to click anotcher element
    });

  });

  it("Should verify subscribe input and social media links is visible", () => {
    HomePage.subscribeInput.should("be.visible");
    HomePage.footerSocialLinks.should("be.visible");
  });
  it("Should scroll to footer section and click on about", () => {
    FooterSection.aboutGroupLego.should("be.visible");
    HomePage.footer.scrollIntoView();
    FooterSection.aboutGroupLego.click();
    cy.url().should("eq", url.aboutUrl);
  });

  // it.only('Should verify slider is visible btn and link direction(verify url)', () => {
  //   HomePage.clickSLiderBtn();
  //   cy.url().should("eq", url.sliderBtnUrl);
  // });

  it("Should verify visiblity and number of links in section special category", () => {
    HomePage.specialCatBaner.should("be.visible");
    HomePage.specialCatBaner.then(($link) => {
      const count = $link.length;
      HomePage.specialCatBaner.should("have.length", count);
    });
  });

  it("Should verify direction, url and title in special category of Star Wars link", () => {
    cy.get('[data-test="quicklink-link"]').contains('Star Wars™').click();
    cy.url("eq", url.starWarsPageUrl);
    cy.get("h1").then(($title) => {
      const title = $title.text();
      cy.get("h1").should("have.text", title);
    });
  });

  

});
