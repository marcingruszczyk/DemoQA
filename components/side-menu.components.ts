import { Page } from '@playwright/test';

export class SideMenuComponent {
  constructor(private page: Page) {
  }

  radioButtonSideMenu = this.page
    .locator('li')
    .filter({ hasText: 'Radio Button' });

  checkBoxSideMenu = this.page.locator('li').filter({ hasText: 'Check Box' });

  textBoxSideMenu = this.page.locator('li').filter({ hasText: 'Text Box' });

  buttonsSideMenu = this.page.locator('li').filter({ hasText: 'Buttons' });
}


