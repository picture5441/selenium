const { By, Key } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {

  async clickSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-icon']`);
    element.click();

    return this;
  }

  async waitFullLoadPage() {

    this.driver.wait.until(ExpectedConditions.visibilityOf(this.findByXpath(`//*[@class='search-modal__container']`)));

    return this;

  }

  
  async inputSearchValue(text) {

    await this.driver.findElement(By.xpath(`//input[@name='searchInput']`)).sendKeys(text, Key.ENTER);

    return this;
  }
}

module.exports = HomePage;
