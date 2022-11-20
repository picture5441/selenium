const { By, Key } = require("selenium-webdriver");
const BasePage = require("./basePage");

class HomePage extends BasePage {

  function () {
    const element = this.findByXpath(`//*[@class='search-icon']`);
    element.click();
    browser.wait(this.url("https://www.tiffany.com/"), 5000);
    return this;
  }

  
   function (text) {

     this.driver.findElement(By.xpath(`//*[@id='searchInput']`)).sendKeys(text, Key.ENTER);

    return this;
  }
}

module.exports = HomePage;
