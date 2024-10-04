class CompaniesPage{
    static addNewCompanyBtn(){
        return cy.get('.css-10egq61 > .MuiButtonBase-root').should("be.visible")
    }

    static searchCompanyField(companyName){
        return cy.get('#mui-4').type(companyName);
    }

    static clickOnCompanyGridToActivateEditBtn(companyIdNumber){
        return cy.get('[data-field="CompanyIdNumber"]').contains(companyIdNumber).click();
    }

    static clickEditFirstSearchedCompany(){
        return cy.get('.MuiDataGrid-cell--textRight > .MuiButtonBase-root').click({ force: true })
    }

    static clickDeleteBtn(){
        return cy.get('.css-12agdxv > .MuiBox-root > .MuiButtonBase-root').click();
    }
    
    static clickYesDeletePopup(){
        return cy.get('.css-gga3r2 > .MuiBox-root > .MuiButton-contained').click();
    }
    
    static assertCompanyNameFromGrid(companyName){
        return cy.get('[data-field="Name"]').contains(companyName).should("be.visible");
    }

    static clickOnCompanyActionBtn(){
        return cy.get('.MuiDataGrid-cell--textRight').click();
    }
    
} 
 
export default CompaniesPage;