import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import BlogsPage from '../../Pages/BlogsPage/BlogsPage.js';
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Adding a new employee', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openBlogsSection();
  });

      it('should exist add new blog button', () => {
        BlogsPage.addNewBlogBtn();
      });

     
  afterEach(() => {
  });
});