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
const links_pages_1 = require('../pages/links.pages');
test_1.test.describe('DemoQA Check boxes', () => {
  let linksPage;
  test_1.test.beforeEach((_a) =>
    __awaiter(void 0, [_a], void 0, function* ({ page }) {
      yield page.goto('/');
      linksPage = new links_pages_1.LinksPage(page);
      yield linksPage.mainMenu.elementsMainMenu.click();
      yield linksPage.sideMenu.linksSideMenu.click();
    }),
  );
  (0, test_1.test)(
    'CLick on Created link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'Created';
        let requestUrl = '/created';
        const statusCode = '201';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
  (0, test_1.test)(
    'CLick on No Content link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'No Content';
        let requestUrl = '/no-content';
        const statusCode = '204';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
  (0, test_1.test)(
    'CLick on Moved link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'Moved';
        let requestUrl = '/moved';
        const statusCode = '301';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
  (0, test_1.test)(
    'CLick on Bad Request link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'Bad Request';
        let requestUrl = '/bad-request';
        const statusCode = '400';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
  (0, test_1.test)(
    'CLick on Unauthorized link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'Unauthorized';
        let requestUrl = '/unauthorized';
        const statusCode = '401';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
  (0, test_1.test)(
    'CLick on Forbidden link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'Forbidden';
        let requestUrl = '/forbidden';
        const statusCode = '403';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
  (0, test_1.test)(
    'CLick on Not Found link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    (_a) =>
      __awaiter(void 0, [_a], void 0, function* ({ page }) {
        // Arrange
        let linkName = 'Not Found';
        let requestUrl = '/invalid-url';
        const statusCode = '404';
        // Act
        yield linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
        // Assert
        yield linksPage.linkAssertion(Number(statusCode));
      }),
  );
});
