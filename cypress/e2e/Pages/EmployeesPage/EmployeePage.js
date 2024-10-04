class EmployeePage {
   
    static clickCompanyDropDownArrow() {
        return cy.get('.MuiAutocomplete-popupIndicator')
    }

    static choseCompanyFromDropdown() {
        return cy.get('.MuiAutocomplete-option').contains('Expert Network')
    }

    //--------------- Methods ---------------------  

    static selectCompany(){
        this.clickCompanyDropDownArrow().click();
        this.choseCompanyFromDropdown().click();
    } 


}

export default EmployeePage;
