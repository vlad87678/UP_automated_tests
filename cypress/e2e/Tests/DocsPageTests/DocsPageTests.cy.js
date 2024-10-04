import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import DocsPage from '../../Pages/DocsPage/DocsPage.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Docs Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openDocsSection();
  });

      it('should can select company', () => {
        DocsPage.selectCompany();
      });
 
     
  afterEach(() => {
  });
});