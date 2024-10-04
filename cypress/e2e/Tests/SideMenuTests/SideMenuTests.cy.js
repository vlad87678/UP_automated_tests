import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Side menu Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
  });
  
      it('should open Dashboard page from SideMenu', () => {
        SideMenu.openDashboardSection();
      });
      
      it('should open Companies page from SideMenu', () => {
        SideMenu.openCompaniesSection(); 
      });
      
      it('should open Contracts page from SideMenu', () => {
        SideMenu.openContractsSection();
      });
      
      it('should open Employee page from SideMenu', () => {
        SideMenu.openEmployeesSection();
      });
      
      it('should open Docs page from SideMenu', () => {
        SideMenu.openDocsSection();
      });
      
      it('should open Payroll Settings page from SideMenu', () => {
        SideMenu.openPayrollSettingsSection();
      }); 

      it('should open Users page from SideMenu', () => {
        SideMenu.openUsersSection();
      });

      it('should open Blogs page from SideMenu', () => {
        SideMenu.openBlogsSection();
      });

  });
  