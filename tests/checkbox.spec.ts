import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/check-box.page';

test.describe('DemoQA Check boxes', () => {
  let checkBoxPage: CheckBoxPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    checkBoxPage = new CheckBoxPage(page);
    await checkBoxPage.mainMenu.elementsMainMenu.click();
    await checkBoxPage.sideMenu.checkBoxSideMenu.click();
  });

  test(
    'Click checkbox and validate selected boxes ',
    {
      tag: '@CheckBox',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to click on Home Checkbox and then validate list of selected boxes',
      },
    },
    async ({ page }) => {
      // Arrange
      const expectedElementsAmount = 17;
      //Act
      await checkBoxPage.clickCheckbox();
      const count = await checkBoxPage.numberOfElements();
      //Assert
      expect(checkBoxPage.validateCheckbox()).toBeTruthy();
      expect(count).toEqual(expectedElementsAmount);
    },
  );
  test(
    'Click expand all, then pick checkbox and validate number of elements ',
    {
      tag: '@CheckBox',
      annotation: {
        type: 'Documentation',
        description:
          'Click expand all, then pick checkbox and validate number of elements',
      },
    },
    async ({ page }) => {
      // Arrange
      const expectedElementsAmount = 5;
      //Act
      await checkBoxPage.expandAndPickOfficeCheckbox();
      const count = await checkBoxPage.numberOfElements();
      //Assert
      expect(checkBoxPage.validateOfficeCheckboxes()).toBeTruthy();
      expect(count).toEqual(expectedElementsAmount);
    },
  );
  test(
    'Click expand all, then pick checkbox and validate number of elements Copy ',
    {
      tag: '@CheckBox',
      annotation: {
        type: 'Documentation',
        description:
          'Click expand all, then pick checkbox and validate number of elements',
      },
    },
    async ({ page }) => {
      // Arrange
      const expectedElementsAmount = 5;
      //Act
      await checkBoxPage.expandAndPickOfficeCheckbox();
      const count = await checkBoxPage.numberOfElements();
      //Assert
      expect(checkBoxPage.validateOfficeCheckboxes()).toBeTruthy();
      expect(count).toEqual(expectedElementsAmount);
    },
  );
});
