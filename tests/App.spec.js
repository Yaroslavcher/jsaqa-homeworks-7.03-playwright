const { test, expect } = require("@playwright/test");
// const { chromium } = require("@playwright/test");

test("valid login", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false,
  //   slowMo: 5000,
  //   devtools: false,
  // });

  //const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  // Input user email at Вход в личный кабинет
  const inputEmail = page.getByPlaceholder("Email");
  await inputEmail.fill(user.email);

  // Input user password at Вход в личный кабинет
  await page.getByPlaceholder("Пароль").fill(user.psswrd);

  // Click Войти
  await page.getByTestId("login-submit-btn").click();
  //await page.pause();

  // Assert The profile page should opened
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(
    page.getByRole("heading", { name: "Мои курсы и профессии" })
  ).toBeVisible();

  //await browser.close();
});

test("invalid login", async ({ page }) => {
  // const browser = await chromium.launch({
  //   headless: false,
  //   slowMo: 5000,
  //   devtools: false,
  // });

  //const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");

  // Input user email at Вход в личный кабинет
  await page.getByPlaceholder("Email").fill(user.email);

  // Input user password at Вход в личный кабинет
  await page.getByPlaceholder("Пароль").fill("invalidP1!");

  // Click Войти
  await page.getByTestId("login-submit-btn").click();
  //await page.pause();

  // Assert The profile page should not opened
  await expect(page.getByTestId("login-error-hint")).toBeVisible();

  // await browser.close();
});
