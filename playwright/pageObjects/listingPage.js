const { test, expect } = require('@playwright/test');
 exports.ListingPage = class ListingPage  {
    constructor(page) {
        this.page = page;
        this.headerSection = page.locator('#step-head-1')
        this.TypeDropDown = page.locator('#ad-main-subcategories-list')
        } 
    

    async selectType(typeofproperty) {
        await this.TypeDropDown.selectOption(typeofproperty); 
    }
}
