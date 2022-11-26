const BasePage = require("./basePage");
const { By } = require("selenium-webdriver");


class emptyBagPage extends BasePage {
    constructor(driver, emptybagValue) {
      super(driver);
      this.emptybagValue = emptybagValue;
    }

    async checkNoResultsMessage(message) {
        await this.findByXpath(`//span[contains(text(), '${message}')]`);
        await this.findByXpath(`//span[@class='type-aem-b-sb' and contains(text(), '${this.emptybagValue}')]`)
        return this;
      }
    }

    module.exports = emptyBagPage