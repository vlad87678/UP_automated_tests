class DocsPage{
    static clickCompanyDropDownArrow() {
        return cy.get(':nth-child(2) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root');
    }

    static choseCompanyFromDropdown() {
        return cy.get('#mui-29-listbox').contains('Expert Network')
    }

    //--------------- Methods ---------------------  

    static selectCompany(){
        this.clickCompanyDropDownArrow().click();
        this.choseCompanyFromDropdown().click();
    }

}

export default DocsPage;