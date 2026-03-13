import { expect, test } from "@playwright/test";

test.describe("Home page header and navigation", () => {
  test("Verify header, h1 tag, and navigation are readable", async ({
    page,
  }) => {
    await page.goto("./");

    const header = page.locator("header");
    await expect(header).toBeVisible();

    const h1 = await header.locator("h1").textContent();
    expect(h1).toBe("NextStarter");

    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();
  });
});

test.describe("Home page sections", () => {
  test("Verify home page sections display correct data.", async ({ page }) => {
    await page.goto("./");
    const sectionTitle = page.locator("h2").first();
    expect(await sectionTitle.textContent()).toBe("Welcome to NextStarter!");
  });
});
