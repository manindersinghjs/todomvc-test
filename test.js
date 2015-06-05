var webdriver = require('browserstack-webdriver');

// Input capabilities
var capabilities = {
  'browserName' : 'firefox', 
  'browserstack.user' : 'maninder15',
  'browserstack.key' : 'psewDgWbMWZm2EBp88wM'
}

var driver = new webdriver.Builder().
  usingServer('http://hub.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();