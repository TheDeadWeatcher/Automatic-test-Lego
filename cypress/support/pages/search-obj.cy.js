class SearchBar {
  clickLoopIcon() {
    const loop = cy.get('[data-test="search-input-button"]');
    loop.should('be.visible');
    loop.click();
  }

  get searchResultProducts() {
    return cy.get('[data-test="product-leaf-title"]');
  }

  get searchResultTitle() {
    return cy.xpath('//span[text()="star wars vader"]');
  }

  get firstProductResult() {
    return cy.get('[data-test="product-item"]');
  }

  get searchResultProductsPrice() {
    return cy.get('[data-test="product-price"]');
  }
}

export default new SearchBar();
