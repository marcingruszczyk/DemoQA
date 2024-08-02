'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.CheckBoxPage = void 0;
const main_menu_components_1 = require('../components/main-menu.components');
const side_menu_components_1 = require('../components/side-menu.components');
class CheckBoxPage {
  constructor(page) {
    this.page = page;
    this.sideMenu = new side_menu_components_1.SideMenuComponent(this.page);
    this.mainMenu = new main_menu_components_1.MainMenuComponent(this.page);
    this.checkbox = this.page.locator('label');
    this.officeCheckbox = this.page
      .locator('label')
      .filter({ hasText: 'Office' });
    this.elementsList = this.page.locator('.text-success');
    this.expandAllCheckboxes = this.page.getByLabel('Expand all');
  }
  clickCheckbox() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.checkbox.click();
    });
  }
  validateCheckbox() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.checkbox.isChecked();
    });
  }
  validateOfficeCheckboxes() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.officeCheckbox.isChecked();
    });
  }
  numberOfElements() {
    return __awaiter(this, void 0, void 0, function* () {
      return yield this.elementsList.count();
    });
  }
  expandAndPickOfficeCheckbox() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.expandAllCheckboxes.click();
      yield this.officeCheckbox.click();
    });
  }
}
exports.CheckBoxPage = CheckBoxPage;
