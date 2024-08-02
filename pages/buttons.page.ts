import { expect, Page } from '@playwright/test';
import { MainMenuComponent } from '../components/main-menu.components';
import { SideMenuComponent } from '../components/side-menu.components';

export class ButtonsBoxPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);
  mainMenu = new MainMenuComponent(this.page);

  doubleClickOnButton = this.page.getByRole('button', {
    name: 'Double Click Me',
  });
  rightClickOnButton = this.page.getByRole('button', {
    name: 'Right Click Me',
  });
  leftClickOnButton = this.page.getByRole('button', {
    name: 'Click Me',
    exact: true,
  });

  async cLickOnButtons(): Promise<void> {
    await this.doubleClickOnButton.dblclick();
    await this.rightClickOnButton.click({
      button: 'right',
    });
    await this.leftClickOnButton.click();
  }

  async assertButtonsMessages(
    doubleCLick: string,
    rightClick: string,
    leftClick: string,
  ): Promise<void> {
    await expect(this.page.getByText(doubleCLick)).toBeVisible();
    await expect(this.page.getByText(rightClick)).toBeVisible();
    await expect(this.page.getByText(leftClick)).toBeVisible();
  }
}
