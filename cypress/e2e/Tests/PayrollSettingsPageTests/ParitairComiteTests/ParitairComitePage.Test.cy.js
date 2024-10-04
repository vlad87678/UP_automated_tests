import AuthenticationPage from '../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../Pages/SideMenu/SideMenu.js';
import ParitairComitePage from '../../../Pages/PayrollSettingsPage/ParitairComitePage/ParitairComitePage.js'

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Paritair Comite Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openPayrollSettingsSection();
  });

      it('should be visible Add new paritair comite button', () => {
        ParitairComitePage.addNewParitairComiteBtn();
      });

     
  afterEach(() => {
  });
});