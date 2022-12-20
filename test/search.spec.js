const { Builder, Capabilities, } = require('selenium-webdriver');
const HomePage = require("../pages/homePage");
const SearchResultsPage = require("../pages/searchResultsPage");



describe('Search any product.', () => {
  const pageUrl = 'https://www.tiffany.com/';

  beforeEach(async function () {
    const capabilities = {
      ...Capabilities.chrome(),
    };
    this.driver = await new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(Capabilities.chrome()).build();
    await this.driver.manage().window().maximize();
  });

  it('Should handle empty search results case.', async function () {
    const emptySearchValue = 'askdkskdaaksdkakdk';
    const noResultsMessage = 'Sorry, no results matched your search for"askdkskdaaksdkakdk"';

    const homePage = new HomePage(this.driver);
    await homePage.openPage(pageUrl);
    await homePage.clickSearchButton();
    await homePage.inputSearchValue(emptySearchValue);

    const searchResultsPage = new SearchResultsPage(this.driver, emptySearchValue);
    await searchResultsPage.checkNoResultsMessage(noResultsMessage);
  }).timeout(20000);


  afterEach(async function () {
    await this.driver.quit();
  })
});
