const { expect } = require('chai');
const { Builder, Capabilities, } = require('selenium-webdriver');
const HomePage = require("../pages/homePage");
const EmptyBagPage = require('../pages/emptybagPage');

describe('Show empty shopping cart.', () => {
  const pageUrl = 'https://www.tiffany.com';

  beforeEach(async function () {
    const capabilities = {
      ...Capabilities.chrome(),
    };
    this.driver = await new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await this.driver.manage().window().maximize();
  });

  it('Should show message about the empty bag.', async function () {

    const emptybagValue = 'Your shopping bag is empty.'

    const homePage = new HomePage(this.driver);
    await homePage.openPage(pageUrl);
    await homePage.clickBagButton(emptybagValue);


    const searchResultsPage = new EmptyBagPage(this.driver, commonSearchValue);
    await searchResultsPage.checkEmptybagMessage();                       

  }).timeout(20000);

  afterEach(async function () {
    await this.driver.quit();
  })
});
