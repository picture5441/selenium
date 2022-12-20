const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");


class HomePage extends BasePage {

  async clickSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-icon']`);
    await element.click();
    return this;
  }


  async clickBagButton() {
    const element = await this.findByXpath("//div[@class='shoppingbagEmpty-icon']")
    await element.click();
    return this;
  }


  async inputSearchValue(text) {
    const element = await this.findByXpath(`//*[@id='searchInput']`);
    await element.sendKeys(text, Key.ENTER);
    return this;
  }
}

module.exports = HomePage;
