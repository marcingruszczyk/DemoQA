import { test, expect } from '@playwright/test';
import { RadioButtonPage } from '../pages/radio-buttons.page';

test.describe('DemoQA Radiobuttons', () => {
  let radioButtonPage: RadioButtonPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    radioButtonPage = new RadioButtonPage(page);
    await radioButtonPage.mainMenu.elementsMainMenu.click();
    await radioButtonPage.sideMenu.radioButtonSideMenu.click();
  });

  test(
    'Check Yes radio button',
    {
      tag: '@RadioButton',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to check the data after pick Yes button is green',
      },
    },
    async ({ page }) => {
      // Arrange
      const expectedText = 'You have selected Yes';
      //Act
      await radioButtonPage.clickYesButton();
      //Assert
      await radioButtonPage.yesButtonAssertion(expectedText);
    }
  );
});
