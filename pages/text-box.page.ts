import { expect, Page } from '@playwright/test';
import { MainMenuComponent } from '../components/main-menu.components';
import { SideMenuComponent } from '../components/side-menu.components';

export class TextBoxPage {
  constructor(private page: Page) {}

  sideMenu = new SideMenuComponent(this.page);
  mainMenu = new MainMenuComponent(this.page);

  fillFullName = this.page.getByPlaceholder('Full Name');
  fillEmailAddress = this.page.getByPlaceholder('name@example.com');
  fillCurrentAddress = this.page.getByPlaceholder('Current Address');
  fillPermanentAddress = this.page.locator('#permanentAddress');
  clickSubmitButton = this.page.getByRole('button', { name: 'Submit' });

  // await this.page.getByText('Name:a').click();
  // await this.page.getByText('Email:a@a.com').click();
  // await this.page.getByText('Current Address :a').click();
  // await this.page.getByText('Permananet Address :a').click();

  async fillAndSubmitForm(
    Name: string,
    emailAddress: string,
    currentAddress: string,
    permanentAddress: string
  ): Promise<void> {
    await this.fillFullName.fill(Name);
    await this.fillEmailAddress.fill(emailAddress);
    await this.fillCurrentAddress.fill(currentAddress);
    await this.fillPermanentAddress.fill(permanentAddress);
    await this.clickSubmitButton.click();
  }

  async assertFormData(
    Name: string,
    emailAddress: string,
    currentAddress: string,
    permanentAddress: string
  ): Promise<void> {
    await expect(this.page.getByText(`Name:${Name}`)).toBeVisible();
    await expect(this.page.getByText(`Email:${emailAddress}`)).toBeVisible();
    await expect(this.page.getByText(`Current Address :${currentAddress}`)).toBeVisible();
    await expect(this.page.getByText(`Permananet Address :${permanentAddress}`)).toBeVisible();
  }
}
