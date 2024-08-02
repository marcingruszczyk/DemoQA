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
exports.TextBoxPage = void 0;
const test_1 = require('@playwright/test');
const main_menu_components_1 = require('../components/main-menu.components');
const side_menu_components_1 = require('../components/side-menu.components');
class TextBoxPage {
  constructor(page) {
    this.page = page;
    this.sideMenu = new side_menu_components_1.SideMenuComponent(this.page);
    this.mainMenu = new main_menu_components_1.MainMenuComponent(this.page);
    this.fillFullName = this.page.getByPlaceholder('Full Name');
    this.fillEmailAddress = this.page.getByPlaceholder('name@example.com');
    this.fillCurrentAddress = this.page.getByPlaceholder('Current Address');
    this.fillPermanentAddress = this.page.locator('#permanentAddress');
    this.clickSubmitButton = this.page.getByRole('button', { name: 'Submit' });
  }
  fillAndSubmitForm(Name, emailAddress, currentAddress, permanentAddress) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.fillFullName.fill(Name);
      yield this.fillEmailAddress.fill(emailAddress);
      yield this.fillCurrentAddress.fill(currentAddress);
      yield this.fillPermanentAddress.fill(permanentAddress);
      yield this.clickSubmitButton.click();
    });
  }
  assertFormData(Name, emailAddress, currentAddress, permanentAddress) {
    return __awaiter(this, void 0, void 0, function* () {
      yield (0, test_1.expect)(
        this.page.getByText(`Name:${Name}`),
      ).toBeVisible();
      yield (0, test_1.expect)(
        this.page.getByText(`Email:${emailAddress}`),
      ).toBeVisible();
      yield (0, test_1.expect)(
        this.page.getByText(`Current Address :${currentAddress}`),
      ).toBeVisible();
      yield (0, test_1.expect)(
        this.page.getByText(`Permananet Address :${permanentAddress}`),
      ).toBeVisible();
    });
  }
}
exports.TextBoxPage = TextBoxPage;
