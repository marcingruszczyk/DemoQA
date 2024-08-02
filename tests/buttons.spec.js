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
const buttons_page_1 = require('../pages/buttons.page');
test_1.test.describe('DemoQA Buttons', () => {
  let buttonsBoxPage;
  test_1.test.beforeEach((_a) =>
    __awaiter(void 0, [_a], void 0, function* ({ page }) {
      yield page.goto('/');
      buttonsBoxPage = new buttons_page_1.ButtonsBoxPage(page);
      yield buttonsBoxPage.mainMenu.elementsMainMenu.click();
      yield buttonsBoxPage.sideMenu.buttonsSideMenu.click();
    }),
  );
  (0, test_1.test)(
    'Click all buttons in specific way',
    {
      tag: '@Buttons',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to click all three buttons in specific way and then verify messages',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        const doubleCLick = `You have done a double click`;
        const rightClick = 'You have done a right click';
        const leftClick = 'You have done a dynamic click';
        //Act
        yield buttonsBoxPage.cLickOnButtons();
        //Assert
        yield buttonsBoxPage.assertButtonsMessages(
          doubleCLick,
          rightClick,
          leftClick,
        );
      }),
  );
});
