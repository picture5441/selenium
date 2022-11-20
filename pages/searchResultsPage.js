const BasePage = require("./basePage");

class SearchResultsPage extends BasePage {
  constructor(driver, searchValue) {
    super(driver);

    this.searchValue = searchValue;
  }

  async checkNoResultsMessage(message) {
    await this.findByXpath(`//span[contains(text(), '${message}')]`);
    await this.findByXpath(`//span[@class='nosearch__container_term' and contains(text(), '${this.searchValue}')]`)

    return this;
  }

  async checkSearchResults() {
    await this.findByXpath(`//div[@class='selected-filters__container_list-item']/span[contains(text(), ${this.searchValue})]`);

    return this;
  }
}

module.exports = SearchResultsPage;
