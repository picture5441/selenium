const BasePage = require("./basePage");

class SearchResultsPage extends BasePage {
  constructor(driver, searchValue) {
    super(driver);

    this.searchValue = searchValue;
  }

  async checkNoResultsMessage() {
    const element = await this.findByXpath(`//*[@class='nosearch__container']`);
    return element.getText();
  }

  async checkSearchResults() {
    await this.findByXpath(`//div[@class='selected-filters__container_list-item']/span[contains(text(), ${this.searchValue})]`);

    return this;
  }
}

module.exports = SearchResultsPage;
