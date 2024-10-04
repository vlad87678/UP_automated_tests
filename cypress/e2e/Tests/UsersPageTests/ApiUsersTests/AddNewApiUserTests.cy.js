import AuthenticationPage from '../../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../../Pages/SideMenu/SideMenu.js';
import AddNewApiUser from '../../../Pages/UsersPage/ApiUsersPage/AddNewApiUser.js';
import ApiUsersPage from '../../../Pages/UsersPage/ApiUsersPage/ApiUsersPage.js';
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Add new API user form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openUsersSection();
  });

      it('should go to API users page', () => {
        ApiUsersPage.apiUsersBtn();
        AddNewApiUser.assertNewApiUserBtn();
      });

     
  afterEach(() => {
  });
});