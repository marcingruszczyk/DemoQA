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
exports.ButtonsBoxPage = void 0;
const test_1 = require('@playwright/test');
const main_menu_components_1 = require('../components/main-menu.components');
const side_menu_components_1 = require('../components/side-menu.components');
class ButtonsBoxPage {
  constructor(page) {
    this.page = page;
    this.sideMenu = new side_menu_components_1.SideMenuComponent(this.page);
    this.mainMenu = new main_menu_components_1.MainMenuComponent(this.page);
    this.doubleClickOnButton = this.page.getByRole('button', {
      name: 'Double Click Me',
    });
    this.rightClickOnButton = this.page.getByRole('button', {
      name: 'Right Click Me',
    });
    this.leftClickOnButton = this.page.getByRole('button', {
      name: 'Click Me',
      exact: true,
    });
  }
  cLickOnButtons() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.doubleClickOnButton.dblclick();
      yield this.rightClickOnButton.click({
        button: 'right',
      });
      yield this.leftClickOnButton.click();
    });
  }
  assertButtonsMessages(doubleCLick, rightClick, leftClick) {
    return __awaiter(this, void 0, void 0, function* () {
      yield (0, test_1.expect)(this.page.getByText(doubleCLick)).toBeVisible();
      yield (0, test_1.expect)(this.page.getByText(rightClick)).toBeVisible();
      yield (0, test_1.expect)(this.page.getByText(leftClick)).toBeVisible();
    });
  }
}
exports.ButtonsBoxPage = ButtonsBoxPage;
