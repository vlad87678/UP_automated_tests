import EmployeePage from '../../Pages/EmployeesPage/EmployeePage.js';
import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')
describe('Employees Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openEmployeesSection();
    EmployeePage.selectCompany();
  });

  it('should can select company from dropdown  ', () => {
    EmployeePage.selectCompany();  
  });

  afterEach(() => {
  });
  
});
  