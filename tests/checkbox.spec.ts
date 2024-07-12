import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/radio-buttons.page';
import { CheckBoxPage } from '../pages/check-box.page';

test.describe('DemoQA Check boxes', () => {
  let checkBoxPage: CheckBoxPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    checkBoxPage = new CheckBoxPage(page);
    await checkBoxPage.mainMenu.elementsMainMenu.click();
    await checkBoxPage.sideMenu.checkBoxSideMenu.click();
  });

  test.only(
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
      await checkBoxPage.numberOfElements();
      const count = await checkBoxPage.numberOfElements()
      //Assert
      await expect(checkBoxPage.validateCheckbox()).toBeTruthy();
      await expect(count).toEqual(expectedElementsAmount);
    }
  );
});
