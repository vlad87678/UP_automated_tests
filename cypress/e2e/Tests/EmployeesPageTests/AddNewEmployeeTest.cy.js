import AddNewEmployee from '../../Pages/EmployeesPage/AddNewEmployee.js';
import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import EmployeePage from '../../Pages/EmployeesPage/EmployeePage.js';
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import { PERSONAL_INFO, MARITAL_STATUS, CONTACT_INFO, WORKING_INFO,ACCOUNT } from '../../../support/utils/employeeConstants.js';
const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Add new employee form tests', () => {
  beforeEach(() => {
    cy.visit('/');

    //cy.loginUPortal(Cypress.env('_email'),Cypress.env('_password'));
    //cy.reload() 

    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openEmployeesSection();
    EmployeePage.selectCompany();
    AddNewEmployee.addNewEmployeeBtn();
  });

      it('should move between sections information from add new employee form', () => {
        AddNewEmployee.moveBetweenSectionInformation();
      });
  
      it('should fill out the Personal info and cancel', () => {
        AddNewEmployee.completePersonalInfo(PERSONAL_INFO.FIRST_NAME, PERSONAL_INFO.LAST_NAME,PERSONAL_INFO.SEX,PERSONAL_INFO.INSZ,PERSONAL_INFO.DATE_OF_BIRTH, PERSONAL_INFO.BIRTHPLACE, PERSONAL_INFO.BIRTH_COUNTRY, PERSONAL_INFO.NATIONALITY, PERSONAL_INFO.LANGUAGE, MARITAL_STATUS.MARRIED);
      });

      it('should fill out the Dependants and cancel', () => {
        AddNewEmployee.completeDependants(PERSONAL_INFO.CHILDREN, PERSONAL_INFO.DISABLED_CHILDREN, PERSONAL_INFO.ELDERLY);
      });

      it('should fill out the  Contact Info and cancel', () => {
        AddNewEmployee.completeContactInfo(CONTACT_INFO.MOBILE_NUMBER, CONTACT_INFO.EMAIL_ADDRESS, CONTACT_INFO.ICE_MOBILE_NUMBER, CONTACT_INFO.STREET_NAME,CONTACT_INFO.NUMBER,CONTACT_INFO.BUS_NUMBER, CONTACT_INFO.CITY,CONTACT_INFO.POSTAL_CODE,CONTACT_INFO.COUNTRY_RESIDENCE)
      });

      it('should fill out the Stay Adress and cancel', () => {
        AddNewEmployee.completeStayAddress(CONTACT_INFO.STAY_STREET,CONTACT_INFO.STAY_NUMBER, CONTACT_INFO.STAY_BUS,CONTACT_INFO.STAY_CITY,CONTACT_INFO.STAY_POSTAL_CODE,CONTACT_INFO.STAY_COUNTRY);
      });

      it('should fill out the Working Info and cancel', () => {
        AddNewEmployee.completeWorkingInfo(WORKING_INFO.WORKER_CLASS,WORKING_INFO.REASON_OF_EMPLOYMENT,WORKING_INFO.IBAN,WORKING_INFO.BIC, WORKING_INFO.MODEL_OF_TRANSPORT, WORKING_INFO.YEARS_OF_EXPERIENCE);
      });

      it('should fill out the  Permanent employee and cancel', () => {
        AddNewEmployee.completePermanentEmployee(WORKING_INFO.MODEL_OF_TRANSPORT,WORKING_INFO.YEARS_OF_EXPERIENCE, WORKING_INFO.START_DATE, WORKING_INFO.IBAN, WORKING_INFO.COMPANY_BRANCH);
      });

      it('should fill out the Account and cancel', () => {
        AddNewEmployee.completeAccount(ACCOUNT.ID_CARD_NUMBER, ACCOUNT.EXPIRATION_DATE,ACCOUNT.PASSWORD)
      });

      it('should check GDPR and cancel', () => {
        AddNewEmployee.gdprToogle();
      });

      it('should set inactive employee and cancel', () => {
        AddNewEmployee.setInactiveEmployee();
      });

      it('should fill out Add new employee form and cancel', () => {
        // Fill out the Personal info
        AddNewEmployee.completePersonalInfo(PERSONAL_INFO.FIRST_NAME, PERSONAL_INFO.LAST_NAME,PERSONAL_INFO.SEX,PERSONAL_INFO.INSZ,PERSONAL_INFO.DATE_OF_BIRTH, PERSONAL_INFO.BIRTHPLACE, PERSONAL_INFO.BIRTH_COUNTRY, PERSONAL_INFO.NATIONALITY, PERSONAL_INFO.LANGUAGE, MARITAL_STATUS.MARRIED);
        // Fill out the Dependants
        AddNewEmployee.completeDependants(PERSONAL_INFO.CHILDREN, PERSONAL_INFO.DISABLED_CHILDREN, PERSONAL_INFO.ELDERLY);
        // Fill out the Contact Info
        AddNewEmployee.completeContactInfo(CONTACT_INFO.MOBILE_NUMBER, CONTACT_INFO.EMAIL_ADDRESS, CONTACT_INFO.ICE_MOBILE_NUMBER, CONTACT_INFO.STREET_NAME,CONTACT_INFO.NUMBER,CONTACT_INFO.BUS_NUMBER, CONTACT_INFO.CITY,CONTACT_INFO.POSTAL_CODE,CONTACT_INFO.COUNTRY_RESIDENCE)
        // Fill out the Stay Adress
        AddNewEmployee.completeStayAddress(CONTACT_INFO.STAY_STREET,CONTACT_INFO.STAY_NUMBER, CONTACT_INFO.STAY_BUS,CONTACT_INFO.STAY_CITY,CONTACT_INFO.STAY_POSTAL_CODE,CONTACT_INFO.STAY_COUNTRY);
        // Fill out the Working Info
        AddNewEmployee.completeWorkingInfo(WORKING_INFO.WORKER_CLASS,WORKING_INFO.REASON_OF_EMPLOYMENT,WORKING_INFO.IBAN,WORKING_INFO.BIC, WORKING_INFO.MODEL_OF_TRANSPORT, WORKING_INFO.YEARS_OF_EXPERIENCE);
        // Fill out the Permanent employee
        AddNewEmployee.completePermanentEmployee(WORKING_INFO.MODEL_OF_TRANSPORT,WORKING_INFO.YEARS_OF_EXPERIENCE, WORKING_INFO.START_DATE, WORKING_INFO.IBAN, WORKING_INFO.COMPANY_BRANCH);

        // Fill out the Account employee
        AddNewEmployee.completeAccount(ACCOUNT.ID_CARD_NUMBER, ACCOUNT.EXPIRATION_DATE,ACCOUNT.PASSWORD)
        
        
        // Check inactive employee, checkbox
        AddNewEmployee.setInactiveEmployee();
        // Agree GDPR
        AddNewEmployee.gdprToogle();

        // Submit the form
        // AddNewEmployee.saveAndSubmitForm();
        // Cancel the form
        //AddNewEmployee.cancelForm();
      });
     
  afterEach(() => {
    AddNewEmployee.cancelForm();
  });
});