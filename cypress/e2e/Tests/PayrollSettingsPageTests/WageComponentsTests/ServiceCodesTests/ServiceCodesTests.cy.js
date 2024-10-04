import AuthenticationPage from '../../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../../Pages/SideMenu/SideMenu.js';
import ServiceCodesPage from '../../../../Pages/PayrollSettingsPage/WageComponentsPage/ServiceCodesPage/ServiceCodesPage.js'
import WageComponentsPage from '../../../../Pages/PayrollSettingsPage/WageComponentsPage/WageComponentsPage.js'
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Wage Components Page - Service codes Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openPayrollSettingsSection();
  });

      it('should can go to componets check if Service codes buttons are visible', () => {
        WageComponentsPage.goToWageComponents();
        ServiceCodesPage.gotoSeviceCodes();
      });

     
  afterEach(() => {
  });
});