const { By, Key } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {

  async clickSearchButton() {

    browser.wait(this.url("https://www.tiffany.com/"), 5000);
    const element = this.findByXpath(`//*[@class='search-icon']`);
    await element.click();
    return this;
  }

 

  async inputSearchValue(text) {

    
     this.driver.findElement(By.xpath(`//*[@id='searchInput']`)).sendKeys(text, Key.ENTER);

    return this;
  }
}

module.exports = HomePage;
