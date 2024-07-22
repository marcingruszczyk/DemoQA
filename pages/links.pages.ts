import { expect, Page } from '@playwright/test';
import { MainMenuComponent } from '../components/main-menu.components';
import { SideMenuComponent } from '../components/side-menu.components';

export class LinksPage {
  constructor(private page: Page) {
  }

  sideMenu = new SideMenuComponent(this.page);
  mainMenu = new MainMenuComponent(this.page);

  async clickOnLink(linkName: string, requestUrl: string, statusCode: number): Promise<any> {
    await this.page.getByRole('link', { name: linkName }).click();
    const response = await this.page.request.get(requestUrl);
    if (statusCode < 300) {
      await expect(response).toBeOK();
    } else {
      await expect(response).not.toBeOK();
    }
  }

  async linkAssertion(statusCode: number): Promise<void> {
    await expect(this.page.getByText(`Link has responded with staus ${statusCode}`)).toBeVisible();
  }

}