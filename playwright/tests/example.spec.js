// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/login');
const { HomePage } = require('../pageObjects/homePage');
const { ListingPage} = require('../pageObjects/listingPage')


// test.beforeEach(async ({ page }) => {
//   await page.goto('https://www.collegerentals.com/');
// });

test.describe('check real estate site', () => {
  test('check the title', async ({ page }) => {
    await page.goto('https://www.collegerentals.com/');
    await expect(page).toHaveURL('https://www.collegerentals.com/');
});
  test('check the successful login', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homepage = new HomePage(page);
  await loginpage.login('welcome@junehomes.com','Tnw6RCMqkHpqJwZ');
  await expect(homepage.buttonLogout).toContainText('Logout')
});

test('check the error on search', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homepage = new HomePage(page);
  await loginpage.login('welcome@junehomes.com','Tnw6RCMqkHpqJwZ');
  await homepage.buttonSearch.click();
  await expect (homepage.errorMessage).toContainText('Please enter a location to search')
});
test('check the search result', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homepage = new HomePage(page);
  await loginpage.login('welcome@junehomes.com','Tnw6RCMqkHpqJwZ');
  await homepage.searchInput.focus();
  await page.keyboard.type('Northeastern University (NU)');
  await homepage.buttonSearch.click();
  await expect (homepage.errorMessage).toContainText('Please enter a location to search')
});

})
test.describe('check real estate site-2', () => {

test('check the expension of menu on hover', async ({ page }) => {
  const loginpage = new LoginPage(page);
  const homepage = new HomePage(page);
  await loginpage.login('welcome@junehomes.com','Tnw6RCMqkHpqJwZ');
  await homepage.expandMenu();
});

})


