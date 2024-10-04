import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import AddNewBlog from '../../Pages/BlogsPage/AddNewBlog.js';
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Add new employee form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openBlogsSection();
  });

      it('should exist add new blog button', () => {
        AddNewBlog.addNewBlogBtn();
      });

     
  afterEach(() => {
  });
});