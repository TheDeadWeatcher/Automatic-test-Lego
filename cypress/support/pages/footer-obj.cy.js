class FooterSection {
  get aboutGroupLego() {
    return cy
      .get('[data-test="footer-links-list-item"]')
      .contains('O Grupie LEGO');
  }

  getLinks() {
    return cy.get('[data-test="footer-links-list-item"]');
  }

  clickLinkByText(linkText) {
    return this.getLinks().contains(linkText).click({ force: true });
  }
}

export default new FooterSection();
