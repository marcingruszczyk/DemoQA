import { Page } from '@playwright/test';

export class MainMenuComponent {
  constructor(private page: Page) {}

  elementsMainMenu = this.page
    .locator('div')
    .filter({ hasText: /^Elements$/ })
    .first();
}
