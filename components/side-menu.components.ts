import { Page } from '@playwright/test';

export class SideMenuComponent {
  constructor(private page: Page) {}

  radioButtonSideMenu = this.page
    .locator('li')
    .filter({ hasText: 'Radio Button' });
}
