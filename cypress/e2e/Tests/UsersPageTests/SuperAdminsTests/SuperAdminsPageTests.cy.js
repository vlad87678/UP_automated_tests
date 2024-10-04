import AuthenticationPage from '../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../Pages/SideMenu/SideMenu.js';
import SuperAdminsPage from '../../../Pages/UsersPage/SuperAdminsPage/SuperAdminsPage.js';
import AddNewSuperAdmin from '../../../Pages/UsersPage/SuperAdminsPage/AddNewSuperAdmin.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Superadmins Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openUsersSection();
  });

      it('should go to superadmins page and check +Add new superadmin button', () => {
        SuperAdminsPage.superAdminsBtn();
        AddNewSuperAdmin.assertAddNewSuperAdminBtn();
      });

     
  afterEach(() => {
  });
});