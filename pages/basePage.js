const { By, until, WebDriver } = require("selenium-webdriver");


chrome_driver = 'C:\Program Files (x86)\_webdrivers\chromedriver\chromedriver.exe'

driver = webdriver.Chrome(chrome_driver)

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
