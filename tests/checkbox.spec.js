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
const test_1 = require('@playwright/test');
const check_box_page_1 = require('../pages/check-box.page');
test_1.test.describe('DemoQA Check boxes', () => {
  let checkBoxPage;
  test_1.test.beforeEach((_a) =>
    __awaiter(void 0, [_a], void 0, function* ({ page }) {
      yield page.goto('/');
      checkBoxPage = new check_box_page_1.CheckBoxPage(page);
      yield checkBoxPage.mainMenu.elementsMainMenu.click();
      yield checkBoxPage.sideMenu.checkBoxSideMenu.click();
    }),
  );
  (0, test_1.test)(
    'Click checkbox and validate selected boxes ',
    {
      tag: '@CheckBox',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to click on Home Checkbox and then validate list of selected boxes',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        const expectedElementsAmount = 17;
        //Act
        yield checkBoxPage.clickCheckbox();
        const count = yield checkBoxPage.numberOfElements();
        //Assert
        (0, test_1.expect)(checkBoxPage.validateCheckbox()).toBeTruthy();
        (0, test_1.expect)(count).toEqual(expectedElementsAmount);
      }),
  );
  (0, test_1.test)(
    'Click expand all, then pick checkbox and validate number of elements ',
    {
      tag: '@CheckBox',
      annotation: {
        type: 'Documentation',
        description:
          'Click expand all, then pick checkbox and validate number of elements',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        const expectedElementsAmount = 5;
        //Act
        yield checkBoxPage.expandAndPickOfficeCheckbox();
        const count = yield checkBoxPage.numberOfElements();
        //Assert
        (0, test_1.expect)(
          checkBoxPage.validateOfficeCheckboxes(),
        ).toBeTruthy();
        (0, test_1.expect)(count).toEqual(expectedElementsAmount);
      }),
  );
});
