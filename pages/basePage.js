const { By, until, WebDriver } = require("selenium-webdriver");

new Builder().forBrowser('chrome').build();


class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async openPage(url) {
    await this.driver.get(url);

    return this;
  }

  async findByXpath(xpath) {
    return this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000)
    
  }
}

module.exports = BasePage;
