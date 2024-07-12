import { Page } from '@playwright/test';
import { MainMenuComponent } from '../components/main-menu.components';
import { SideMenuComponent } from '../components/side-menu.components';

export class CheckBoxPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);
  mainMenu = new MainMenuComponent(this.page);

  checkbox = this.page.locator('label');
  officeCheckbox = this.page.locator('label').filter({ hasText: 'Office' });
  elementsList = this.page.locator('.text-success');
  expandAllCheckboxes = this.page.getByLabel('Expand all');
  async clickCheckbox() {
    await this.checkbox.click();
  }
  async validateCheckbox() {
    await this.checkbox.isChecked();
  }
  async validateOfficeCheckboxes() {
    await this.officeCheckbox.isChecked();
  }
  async numberOfElements(): Promise<number> {
    return await this.elementsList.count();
  }
  async expandAndPickOfficeCheckbox() {
    await this.expandAllCheckboxes.click();
    await this.officeCheckbox.click();
  }
}
