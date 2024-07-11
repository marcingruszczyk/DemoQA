import { expect, Page } from '@playwright/test';
import { MainMenuComponent } from '../components/main-menu.components';
import { SideMenuComponent } from '../components/side-menu.components';

export class RadioButtonPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);
  mainMenu = new MainMenuComponent(this.page);

  yesButton = this.page.locator('div').filter({ hasText: /^Yes$/ });
  impressiveButton = this.page
    .locator('div')
    .filter({ hasText: /^Impressive$/ });

  async clickYesButton(): Promise<void> {
    await this.yesButton.click();
  }
  async clickImpressiveButton(): Promise<void> {
    await this.impressiveButton.click();
  }

  async radioButtonAssertion(
    expectedText: string,
    choosenButton: string
  ): Promise<void> {
    await expect(this.page.getByText(expectedText)).toBeVisible();
    await expect(
      this.page.getByRole('paragraph').getByText(choosenButton)
    ).toHaveClass('text-success');
  }
}
