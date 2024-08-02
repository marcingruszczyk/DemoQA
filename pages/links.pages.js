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
exports.LinksPage = void 0;
const test_1 = require('@playwright/test');
const main_menu_components_1 = require('../components/main-menu.components');
const side_menu_components_1 = require('../components/side-menu.components');
class LinksPage {
  constructor(page) {
    this.page = page;
    this.sideMenu = new side_menu_components_1.SideMenuComponent(this.page);
    this.mainMenu = new main_menu_components_1.MainMenuComponent(this.page);
  }
  clickOnLink(linkName, requestUrl, statusCode) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.page.getByRole('link', { name: linkName }).click();
      const response = yield this.page.request.get(requestUrl);
      if (statusCode < 300) {
        yield (0, test_1.expect)(response).toBeOK();
      } else {
        yield (0, test_1.expect)(response).not.toBeOK();
      }
    });
  }
  linkAssertion(statusCode) {
    return __awaiter(this, void 0, void 0, function* () {
      yield (0, test_1.expect)(
        this.page.getByText(`Link has responded with staus ${statusCode}`),
      ).toBeVisible();
    });
  }
}
exports.LinksPage = LinksPage;
