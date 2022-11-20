const { By, Key } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {

  async clickSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-icon']`);
    element.click();

    browser.wait(EC.url("https://www.tiffany.com/"), 5000);
  }

  
  async inputSearchValue(text) {

    await this.driver.findElement(By.xpath(`//*[@label='searchInput']`)).sendKeys(text, Key.ENTER);

    return this;
  }
}

module.exports = HomePage;
