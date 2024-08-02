'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.MainMenuComponent = void 0;
class MainMenuComponent {
  constructor(page) {
    this.page = page;
    this.elementsMainMenu = this.page
      .locator('div')
      .filter({ hasText: /^Elements$/ })
      .first();
  }
}
exports.MainMenuComponent = MainMenuComponent;
