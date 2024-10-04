import AuthenticationPage from '../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../Pages/SideMenu/SideMenu.js';
import WageComponentsPage from '../../../Pages/PayrollSettingsPage/WageComponentsPage/WageComponentsPage.js'
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Wage Components Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openPayrollSettingsSection();
  });

      it('should can check if codes cuttons are visible', () => {
        WageComponentsPage.goToWageComponents();
        WageComponentsPage.checkSeviceCodes();
        WageComponentsPage.checkCostDeclarationCodes();
      });

     
  afterEach(() => {
  });
});