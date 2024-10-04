import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import DashboardPage from '../../Pages/DashboardPage/DashboardPage.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Dashboard Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openDashboardSection();
  });

      it('should exist Error Logs title', () => {
        DashboardPage.checkErrorLogs();
      });

     
  afterEach(() => {
  });
});