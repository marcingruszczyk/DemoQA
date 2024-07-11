import { expect, Page } from '@playwright/test';
import { MainMenuComponent } from '../components/main-menu.components';
import { SideMenuComponent } from '../components/side-menu.components';

export class RadioButtonPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);
  mainMenu = new MainMenuComponent(this.page);

  yesButton = this.page.locator('div').filter({ hasText: /^Yes$/ });

  async clickYesButton(): Promise<void> {
    await this.yesButton.click();

  }

  async yesButtonAssertion(expectedText: string): Promise<void> {
    await expect(this.page.getByText(expectedText)).toBeVisible();
      await expect(this.page.getByRole('paragraph').getByText('Yes')).toHaveClass(
        'text-success'
      );

  }
}
