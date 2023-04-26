class HomePage {
  get logo() {
    return cy.get('[data-test="lego-logo"]');
  }

  get topNav() {
    return cy.get('.MainBarstyles__Container-sc-1cg7sjw-1');
  }

  get mainSlider() {
    return cy.get(
      '[data-test="hero-banner-bg-image"] > [data-test="product-leaf-image"] > .Imagestyles__Img-sc-1qqdbhr-0'
    );
  }

  get recommendetSection() {
    return cy.get('[data-test="product-recommended"]');
  }

  get bestsellerSection() {
    return cy.get('#bltc656648b79074da5');
  }

  get footer() {
    return cy.get('[data-test="footer"] > :nth-child(1)');
  }

  get subscribeInput() {
    return cy.get('[data-test="input-with-button-input"]');
  }

  get footerSocialLinks() {
    return cy.get('[data-test="footer-social-links"]');
  }

  get specialCatBaner() {
    return cy.get('[data-test="quicklink-link"]');
  }

  clickSLiderBtn() {
    const btn = cy.get('[kind="lightTheme"]');
    btn.should('be.visible');
    btn.click();
  }
}

export default new HomePage();
