const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../pageObject/mainPage');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObject/pageComponents/searchComponent');
const BasePage = require('../pageObject/basePage');

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();

describe('chromedriver tests', () => {

    after(async() => {
        await BasePage.close();
    });

    it('check title', async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        await baseElements.click(searchComponent.searchButton);
        await baseElements.sendKeys(searchComponent.searchField, 'driver');
        await baseElements.click(searchComponent.startSearch);
        await driver.wait(until.elementIsVisible(searchComponent.resultsOnThisSite), 5000);
        const descriptions = await searchComponent.searchResultDescription;
        for(let element in descriptions) {
            console.log('1 - ', element)
            expect(await element.getText().toLowerCase()).to.contain('driver');
        }
    })
});