import { test } from '@playwright/test';
import { ButtonsBoxPage } from '../pages/buttons.page';


test.describe('DemoQA Buttons', () => {
  let buttonsBoxPage: ButtonsBoxPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    buttonsBoxPage = new ButtonsBoxPage(page);
    await buttonsBoxPage.mainMenu.elementsMainMenu.click();
    await buttonsBoxPage.sideMenu.buttonsSideMenu.click();
  });

  test(
    'Click all buttons in specific way',
    {
      tag: '@Buttons',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to click all three buttons in specific way and then verify messages'
      }
    },
    async ({ page }) => {
      // Arrange
      const doubleCLick = `You have done a double click`;
      const rightClick = 'You have done a right click';
      const leftClick = 'You have done a dynamic click';
      //Act
      await buttonsBoxPage.cLickOnButtons();
      //Assert
      await buttonsBoxPage.assertButtonsMessages(doubleCLick, rightClick, leftClick);
    }
  );
});
