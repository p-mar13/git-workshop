import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../fixtures/testData';

test.describe('Login flow', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login(users.validUser.email, users.validUser.password);

    await expect(page).toHaveURL(/dashboard/);
  });

test('should display error message with invalidcredentials',async({ page }) => {
  const loginPage= new LoginPage(page);
  
  await loginPage.open();
  await loginPage.login('invalid@example.com', 'wrongpassword');

  const errorMessage= await loginPage.getErrorMessage();
  expect(errorMessage).toBeTruthy();

});
});