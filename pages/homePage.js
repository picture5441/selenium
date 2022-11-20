const { By, Key } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {

  async clickSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-icon']`);
    element.click();

    return this;
  }

async waitSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-modal']`);
    element.click();

    return this;
    
  }

  
  async inputSearchValue(text) {

    await this.driver.findElement(By.xpath(`//input[@name='search-modal']`)).sendKeys(text, Key.ENTER);

    return this;
  }
}

module.exports = HomePage;
