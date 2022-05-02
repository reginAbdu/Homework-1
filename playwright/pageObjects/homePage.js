const { test, expect } = require('@playwright/test');
exports.HomePage = class HomePage {
    constructor(page) {
    this.page = page;
    this.buttonLogout = page.locator('//*[@class ="bt-row bt-justify-content-end bt-align-items-center"]/a[contains(text(), "Logout")]');
    this.buttonAddListing = page.locator('//*[@class ="bt-row bt-justify-content-end bt-align-items-center"]/a[contains(text(), "Add a Listing")]');
    this.searchInput = page.locator('#location_input');
    this.buttonSearch = page.locator('#submitSearch');
    this.errorMessage = page.locator('#location-error')
    this.leftNavMenu = page.locator('//*[@id = "desktop-menu-btn"]')
    this.leftNaveMenuCollapsible = page.locator('//div[@id = "desktop-menu-block"]/div[@class="menu-simple-block"]')
    }
    async addListing () {
        await expect(this.buttonAddListing).toBeVisible();
        await this.buttonAddListing.click()
    }
    async expandMenu() {
        await this.leftNavMenu.hover();
        await expect (this.leftNaveMenuCollapsible).toBeVisible();
    }

}
