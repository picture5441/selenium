const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");


class HomePage extends BasePage {

  async clickSearchButton() {
    const element = this.findByXpath(`//*[@class='search-icon']`);
    await element.click();
    return this;
  }


  async clickBagButton() {
    const element = this.findByXpath(`//[@class='shoppingbag']`)
    await element.click();
    return this;
  }


  async inputSearchValue(text) {
    this.driver.wait(until.elementLocated(By.xpath('//*[@id="tiffany-search-modal"]/tiffany-search-modal/div/div')), 5000);
    await this.driver.findElement(By.xpath(`//*[@id='searchInput']`)).sendKeys(text, Key.ENTER);
    return this;
  }
}

module.exports = HomePage;
