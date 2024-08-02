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
const radio_buttons_page_1 = require('../pages/radio-buttons.page');
test_1.test.describe('DemoQA Radiobuttons', () => {
  let radioButtonPage;
  test_1.test.beforeEach((_a) =>
    __awaiter(void 0, [_a], void 0, function* ({ page }) {
      yield page.goto('/');
      radioButtonPage = new radio_buttons_page_1.RadioButtonPage(page);
      yield radioButtonPage.mainMenu.elementsMainMenu.click();
      yield radioButtonPage.sideMenu.radioButtonSideMenu.click();
    }),
  );
  (0, test_1.test)(
    'Check Yes radio button',
    {
      tag: '@RadioButton',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to check the data after pick Yes button and text should be green',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        const expectedText = 'You have selected Yes';
        const chosenButton = 'Yes';
        //Act
        yield radioButtonPage.clickYesButton();
        //Assert
        yield radioButtonPage.radioButtonAssertion(expectedText, chosenButton);
      }),
  );
  (0, test_1.test)(
    'Check Impressive radio button',
    {
      tag: '@RadioButton',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to check the data after pick Impressive button and text should be green',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        const expectedText = 'You have selected Impressive';
        const chosenButton = 'Impressive';
        //Act
        yield radioButtonPage.clickImpressiveButton();
        //Assert
        yield radioButtonPage.radioButtonAssertion(expectedText, chosenButton);
      }),
  );
});
