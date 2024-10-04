import AuthenticationPage from '../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../Pages/SideMenu/SideMenu.js';
import AddNewParitairComite from '../../../Pages/PayrollSettingsPage/ParitairComitePage/AddNewParitairComite.js'

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Add new Paritair Comite form Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openPayrollSettingsSection();
  });

      it('should be visible Add new paritair comite button', () => {
        AddNewParitairComite.addNewParitairComiteBtn();
      });

     
  afterEach(() => {
  });
});