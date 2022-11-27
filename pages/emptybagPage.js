const BasePage = require("./basePage");



class EmptyBagPage extends BasePage {
    constructor(driver, emptybagValue) {
      super(driver);
      this.emptybagValue = emptybagValue;
    }

    async checkEmptybagMessage() {
        await this.findByXpath(`//span[@class='type-aem-b-sb' and contains(text(), '${this.emptybagValue}')]`)
        return this;
      }
    }

    module.exports = EmptyBagPage;