import AuthenticationPage from '../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../Pages/SideMenu/SideMenu.js';
import ApiUsersPage from '../../../Pages/UsersPage/ApiUsersPage/ApiUsersPage.js';
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('API Users Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openUsersSection();
  });

      it('should go to API users page', () => {
        ApiUsersPage.apiUsersBtn();
        ApiUsersPage.assertNewApiUserBtn();
      });

     
  afterEach(() => {
  });
});