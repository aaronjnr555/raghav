import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

describe("All Login Tests", () => {
  it("Login Test 1", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
  });

  it.skip("Login Test 2", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    loginPage.enterUsername("Admin123");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
  });
});
