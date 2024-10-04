import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import EmployeePage from '../../Pages/EmployeesPage/EmployeePage.js';
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import InviteEmployees from '../../Pages/EmployeesPage/InviteEmployees.js';
import { INVITE_EMPLOYEE } from '../../../support/utils/employeeConstants.js';


const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Invite employee form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openEmployeesSection();
    EmployeePage.selectCompany();
    InviteEmployees.inviteEmployeesBtn();
  });

      it('should move between sections information from invite employee form', () => {
        InviteEmployees.moveBetweenSection();
      });

      it('should complete Invite employee section and cancel', () => {
        InviteEmployees.completeInviteEmployees(INVITE_EMPLOYEE.FIRST_NAME,INVITE_EMPLOYEE.LAST_NAME, INVITE_EMPLOYEE.EMAIL_ADDRESS,INVITE_EMPLOYEE.COMPANY_BRANCH, INVITE_EMPLOYEE.WORKER_CLASS,INVITE_EMPLOYEE.LANGUAGE);
      });

      
      it('should complete Create Onboarding link section and cancel', () => {
        InviteEmployees.completeCreateOnboardingLink(INVITE_EMPLOYEE.WORKER_CLASS);
      });

      it('should complete Active links section and cancel', () => {
        InviteEmployees.completeActiveLinks();
      });

      it('should complete all Invite employee forms and cancel ', () => {
        InviteEmployees.completeInviteEmployees(INVITE_EMPLOYEE.FIRST_NAME,INVITE_EMPLOYEE.LAST_NAME, INVITE_EMPLOYEE.EMAIL_ADDRESS,INVITE_EMPLOYEE.COMPANY_BRANCH, INVITE_EMPLOYEE.WORKER_CLASS,INVITE_EMPLOYEE.LANGUAGE);
        InviteEmployees.completeCreateOnboardingLink(INVITE_EMPLOYEE.WORKER_CLASS);
        InviteEmployees.completeActiveLinks();
    });

     
  afterEach(() => {
    InviteEmployees.cancelForm();
  });
});