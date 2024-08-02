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
const text_box_page_1 = require('../pages/text-box.page');
test_1.test.describe('DemoQA Check boxes', () => {
  let textBoxPage;
  test_1.test.beforeEach((_a) =>
    __awaiter(void 0, [_a], void 0, function* ({ page }) {
      yield page.goto('/');
      textBoxPage = new text_box_page_1.TextBoxPage(page);
      yield textBoxPage.mainMenu.elementsMainMenu.click();
      yield textBoxPage.sideMenu.textBoxSideMenu.click();
    }),
  );
  (0, test_1.test)(
    'Fill all fields and validate them',
    {
      tag: '@TextBox',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to fill all fields in form then check the data is correct',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        const Name = 'John Doe';
        const emailAddress = 'jdoe@example.com';
        const currentAddress = 'New York';
        const permanentAddress = 'Los Angeles';
        //Act
        yield textBoxPage.fillAndSubmitForm(
          Name,
          emailAddress,
          currentAddress,
          permanentAddress,
        );
        //Assert
        yield textBoxPage.assertFormData(
          Name,
          emailAddress,
          currentAddress,
          permanentAddress,
        );
      }),
  );
});
