const BasePage = require("./basePage");

class SearchResultsPage extends BasePage {
  constructor(driver, searchValue) {
    super(driver);

    this.searchValue = searchValue;
  }

  async checkNoResultsMessage(message) {
    await this.findByXpath(`//span[contains(text(), '${message}')]`);
    await this.findByXpath(`//span[@class='search-keywords' and contains(text(), '${this.searchValue}')]`)

    return this;
  }

  async checkSearchResults() {
    await this.findByXpath(`//div[@class='search-result-title']/span[contains(text(), ${this.searchValue})]`);

    return this;
  }
}

module.exports = SearchResultsPage;
