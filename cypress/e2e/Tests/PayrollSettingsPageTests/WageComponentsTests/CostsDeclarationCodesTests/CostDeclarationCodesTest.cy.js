import AuthenticationPage from '../../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../../Pages/SideMenu/SideMenu.js';
import CostDeclarationCodesPage from '../../../../Pages/PayrollSettingsPage/WageComponentsPage/CostsDeclarationCodesPage/CostDeclarationCodesPage.js'
import WageComponentsPage from '../../../../Pages/PayrollSettingsPage/WageComponentsPage/WageComponentsPage.js'
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Cost declaration codes Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openPayrollSettingsSection();
  });

      it('should can go to componets check if can add one new cost delaration', () => {
        WageComponentsPage.goToWageComponents();
        CostDeclarationCodesPage.goToCostDeclarationCodes();
        CostDeclarationCodesPage.checkAddNewCostDeclaratioBtn();
      });

     
  afterEach(() => {
  });
});