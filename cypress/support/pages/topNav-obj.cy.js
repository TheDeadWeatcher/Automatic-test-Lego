class TopNav {
  getLinks() {
    return cy.get('[data-test="navigation-submenu-grandchildren-link"]');
  }

  clickLinkByText(linkText) {
    return this.getLinks().contains(linkText).click({ force: true });
  }

  get kupujMainCat() {
    return cy.get('[data-test="menu-bar-item-button"]').contains('Kupuj');
  }

  get zestawWedlug() {
    return cy
      .get('[data-test="navigation-submenu-button"]')
      .contains('Zestawy według tematyki');
  }

  get zestawLink() {
    return cy
      .get('[data-test="navigation-submenu-button"]')
      .contains('Zestawy według tematyki');
  }

  get seeAll() {
    return cy
      .get('[data-test="see-all-link"]')
      .contains('ZOBACZ WSZYSTKIE OBSZARY TEMATYCZNE');
  }
}

export default new TopNav();
