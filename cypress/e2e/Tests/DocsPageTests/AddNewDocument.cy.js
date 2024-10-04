import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import AddNewDocument from '../../Pages/DocsPage/AddNewDocument.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Add new document form Test', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openDocsSection();
  });

      it('should can see add document button', () => {
        AddNewDocument.addNewDocumentBtn();
      });
 
     
  afterEach(() => {
  });
});