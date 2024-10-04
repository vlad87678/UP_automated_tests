import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import CompaniesPage from '../../Pages/CompaniesPage/CompaniesPage.js';
import { COMPANY_INFO, COMPANY_INFO_SEARCH } from '../../../support/utils/companyConstants.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Company Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openCompaniesSection();
  });  

      it('should exist add new company button', () => {
        CompaniesPage.addNewCompanyBtn();
      });

      it('should can search a Company using Search Filter', () => {
        CompaniesPage.searchCompanyField(COMPANY_INFO_SEARCH.COMPANY_NAME);
        CompaniesPage.assertCompanyNameFromGrid(COMPANY_INFO_SEARCH.COMPANY_NAME);
      });

      it('should can edit a Company using Edit Btn', () => {
        CompaniesPage.searchCompanyField(COMPANY_INFO_SEARCH.COMPANY_NAME);
        CompaniesPage.assertCompanyNameFromGrid(COMPANY_INFO_SEARCH.COMPANY_NAME);
        CompaniesPage.clickOnCompanyActionBtn();
        CompaniesPage.clickEditFirstSearchedCompany();

      });

      it('should can delete a company only with "Company" form/section completed', () => {
        CompaniesPage.searchCompanyField(COMPANY_INFO.COMPANY_NAME);
        CompaniesPage.clickOnCompanyGridToActivateEditBtn(COMPANY_INFO.COMPANY_ID_NUMBER);
        CompaniesPage.clickEditFirstSearchedCompany();
        CompaniesPage.clickDeleteBtn();
        CompaniesPage.clickYesDeletePopup();
        CompaniesPage.addNewCompanyBtn();
      });

      it('should can delete a company with all forms/sections completed', () => {
        CompaniesPage.searchCompanyField(COMPANY_INFO.COMPANY_NAME);
        CompaniesPage.clickOnCompanyGridToActivateEditBtn(COMPANY_INFO.COMPANY_ID_NUMBER);
        CompaniesPage.clickEditFirstSearchedCompany();
        CompaniesPage.clickDeleteBtn();
        CompaniesPage.clickYesDeletePopup();
        CompaniesPage.addNewCompanyBtn();
      });


  afterEach(() => {

  });
});