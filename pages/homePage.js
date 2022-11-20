const { By, Key } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {

  async clickSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-icon']`);
    element.click();

    return this;
  }

async clickSearchButton() {
    const element = await this.findByXpath(`//*[@class='search-modal']`);
    element.click();

    return this;
    
  }

  async waitFullLoadPage(){
    _wait = new WebDriverWait(_driver, new TimeSpan(0, 1, 0));
    _wait.Until(d => d.FindElement(By.xpath("searchInput")));
  }

  
  async inputSearchValue(text) {

    await this.driver.findElement(By.xpath(`//input[@name='searchInput']`)).sendKeys(text, Key.ENTER);

    return this;
  }
}

module.exports = HomePage;
