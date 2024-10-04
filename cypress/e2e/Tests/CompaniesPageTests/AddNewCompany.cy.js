import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'
import SideMenu from '../../Pages/SideMenu/SideMenu.js';
import AddNewCompany from '../../Pages/CompaniesPage/AddNewCompany.js';
import CompaniesPage from '../../Pages/CompaniesPage/CompaniesPage.js';
import { COMPANY_INFO } from '../../../support/utils/companyConstants.js';

const email = Cypress.env('_email')
const pass = Cypress.env('_password')

describe('Add new company form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    AuthenticationPage.loginMethod(email, pass)
    AuthenticationPage.assertDashboardTitleIsVisible()
    SideMenu.openCompaniesSection();
    AddNewCompany.assertAdddNewCompanyBtn();
    AddNewCompany.openAddNewCompanyForm();

  });

    it('should I can complete in all fields to can use save and next button', () => {
      AddNewCompany.completeCompanySection(COMPANY_INFO.COMPANY_NAME, COMPANY_INFO.COMMERCIAL_NAME,COMPANY_INFO.STREET_NAME,COMPANY_INFO.NUMBER, COMPANY_INFO.BUS_NUMBER, COMPANY_INFO.CITY, COMPANY_INFO.POSTAL_CODE, COMPANY_INFO.COUNTRY, COMPANY_INFO.COMPANY_ID_NUMBER, COMPANY_INFO.COMPANY_FORMAT, COMPANY_INFO.EMAIL_ADDRESS);
      AddNewCompany.activateToggles();
      AddNewCompany.saveAddNewCompanyBtn();
    });

    it('should I can complete all mandatory fields from company section and move between other sections', () => {
       AddNewCompany.completeCompanySection(COMPANY_INFO.COMPANY_NAME, COMPANY_INFO.COMMERCIAL_NAME,COMPANY_INFO.STREET_NAME,COMPANY_INFO.NUMBER, COMPANY_INFO.BUS_NUMBER, COMPANY_INFO.CITY, COMPANY_INFO.POSTAL_CODE, COMPANY_INFO.COUNTRY, COMPANY_INFO.COMPANY_ID_NUMBER, COMPANY_INFO.COMPANY_FORMAT, COMPANY_INFO.EMAIL_ADDRESS);
       AddNewCompany.saveAddNewCompanyBtn();
       AddNewCompany.assertSectionsVisibility();
       AddNewCompany.moveBetweenSection(); 
    });

  //   it.skip('should I can complete all mandatory fields from company section and the other sections to not be visible for clicking without saving ', () => {
  //     //AddNewCompany.completeCompanySection(COMPANY_INFO.COMPANY_NAME, COMPANY_INFO.COMMERCIAL_NAME,COMPANY_INFO.STREET_NAME,COMPANY_INFO.NUMBER, COMPANY_INFO.BUS_NUMBER, COMPANY_INFO.CITY, COMPANY_INFO.POSTAL_CODE, COMPANY_INFO.COUNTRY, COMPANY_INFO.COMPANY_ID_NUMBER, COMPANY_INFO.COMPANY_FORMAT, COMPANY_INFO.EMAIL_ADDRESS);
  //     AddNewCompany.assertSectionsVisibility();
  //     //AddNewCompany.moveBetweenSection(); 
  //  });
   
     
  afterEach(() => {
    // SideMenu.openCompaniesSection();
    // CompaniesPage.searchCompanyField(COMPANY_INFO.COMPANY_NAME);
    // CompaniesPage.hoverOverCompanyGrid(COMPANY_INFO.COMPANY_ID_NUMBER);
    // CompaniesPage.clickEditFirstSearchedCompany();
    // CompaniesPage.clickDeleteBtn();
    // CompaniesPage.clickYesDeletePopup();
    // CompaniesPage.addNewCompanyBtn();
  });
});