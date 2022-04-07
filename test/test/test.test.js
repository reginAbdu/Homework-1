
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize();


describe(`new tests`, function() {

    it('проверить текст основного тайтла', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const chromeTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span')).getText();
        await driver.sleep(2000);
        expect (chromeTitle).to.equal('ChromeDriver')
    })

    

    it('кликнуть в хедере на пункт "Chrome Extensions"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const navItem = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a'));
        await navItem.click();
        await driver.sleep(2000);
        expect(await driver.getCurrentUrl()).to.equal('https://chromedriver.chromium.org/extensions'); 
    });
    it('хайлат элемента', async () => {
        var element = driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
        driver.executeScript("arguments[0].setAttribute('style','border: solid 2px red')", element);
    })

    it('проверить что новый тайтл стал "Chrome Extensions"', async () => {
        await driver.get('https://chromedriver.chromium.org/extensions');
        const chromeExtTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span')).getText();
        await driver.sleep(2000);
        expect(chromeExtTitle).to.equal('Chrome Extensions'); 
    });

    it('Перейти на страницу поиска', async () => {
        await driver.get('https://chromedriver.chromium.org/extensions');
        const searchElement = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div'));
        await searchElement.click();
        const searchField = await driver.findElement(By.css('#yDmH0d > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div.TbNlJb.upKXGe > div.E2UJ5 > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input'));
        await driver.sleep(2000);
        let result = await (searchField).isDisplayed()
        expect(result).to.be.true; 
    });

    it('Проверить что первая ссылка содержит слово driver', async () => {
        await driver.get('https://chromedriver.chromium.org/extensions');
        const searchElement = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div'));
        await searchElement.click();
        const searchField = await driver.findElement(By.css('#yDmH0d > div:nth-child(1) > div > div:nth-child(1) > div:nth-child(2) > div.TbNlJb.upKXGe > div.E2UJ5 > div > div.aCsJod.oJeWuf > div > div.Xb9hP > input'));
        await driver.sleep(2000);
        await searchField.sendKeys('driver');
        const searchLoop = await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/div[1]'))
        await searchLoop.click()
        await driver.sleep(2000);
        const link = await driver.findElement(By.xpath('//*[@id="yDmH0d"]/div[1]/div/div[1]/div[3]/div[2]/div/div[2]/div[1]/div/div[1]')).getText()
        expect (link).to.include('driver');
        await driver.close();

        
    });


})
