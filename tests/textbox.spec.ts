import { test } from '@playwright/test';
import { TextBoxPage } from '../pages/text-box.page';

test.describe('DemoQA Check boxes', () => {
  let textBoxPage: TextBoxPage;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    textBoxPage = new TextBoxPage(page);
    await textBoxPage.mainMenu.elementsMainMenu.click();
    await textBoxPage.sideMenu.textBoxSideMenu.click();
  });

  test(
    'Fill all fields and validate them',
    {
      tag: '@TextBox',
      annotation: {
        type: 'Documentation',
        description:
          'In this test I need to fill all fields in form then check the data is correct',
      },
    },
    async ({ page }) => {
      // Arrange
      const Name = 'John Doe';
      const emailAddress = 'jdoe@example.com';
      const currentAddress = 'New York';
      const permanentAddress = 'Los Angeles';
      //Act
      await textBoxPage.fillAndSubmitForm(
        Name,
        emailAddress,
        currentAddress,
        permanentAddress,
      );
      //Assert
      await textBoxPage.assertFormData(
        Name,
        emailAddress,
        currentAddress,
        permanentAddress,
      );
    },
  );
});
