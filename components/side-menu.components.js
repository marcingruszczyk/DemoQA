'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.SideMenuComponent = void 0;
class SideMenuComponent {
  constructor(page) {
    this.page = page;
    this.radioButtonSideMenu = this.page
      .locator('li')
      .filter({ hasText: 'Radio Button' });
    this.checkBoxSideMenu = this.page
      .locator('li')
      .filter({ hasText: 'Check Box' });
    this.textBoxSideMenu = this.page
      .locator('li')
      .filter({ hasText: 'Text Box' });
    this.buttonsSideMenu = this.page
      .locator('li')
      .filter({ hasText: 'Buttons' });
    this.linksSideMenu = this.page.locator('li').filter({ hasText: /^Links$/ });
  }
}
exports.SideMenuComponent = SideMenuComponent;
