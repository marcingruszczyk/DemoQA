import { test } from '@playwright/test';
import { LinksPage } from '../pages/links.pages';

test.describe('DemoQA Check boxes', () => {
  let linksPage: LinksPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    linksPage = new LinksPage(page);
    await linksPage.mainMenu.elementsMainMenu.click();
    await linksPage.sideMenu.linksSideMenu.click();
  });

  test(
    'CLick on Created link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'Created';
      let requestUrl = '/created';
      const statusCode = '201';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );

  test(
    'CLick on No Content link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'No Content';
      let requestUrl = '/no-content';
      const statusCode = '204';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );
  test(
    'CLick on Moved link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'Moved';
      let requestUrl = '/moved';
      const statusCode = '301';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );
  test(
    'CLick on Bad Request link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'Bad Request';
      let requestUrl = '/bad-request';
      const statusCode = '400';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );
  test(
    'CLick on Unauthorized link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'Unauthorized';
      let requestUrl = '/unauthorized';
      const statusCode = '401';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );
  test(
    'CLick on Forbidden link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'Forbidden';
      let requestUrl = '/forbidden';
      const statusCode = '403';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );
  test(
    'CLick on Not Found link',
    {
      tag: '@Links @Requests',
      annotation: {
        type: 'Documentation',
        description:
          'When I click on created link then should appear message about correct status',
      },
    },
    async ({ page }) => {
      // Arrange
      let linkName = 'Not Found';
      let requestUrl = '/invalid-url';
      const statusCode = '404';
      // Act
      await linksPage.clickOnLink(linkName, requestUrl, Number(statusCode));
      // Assert
      await linksPage.linkAssertion(Number(statusCode));
    },
  );
});
