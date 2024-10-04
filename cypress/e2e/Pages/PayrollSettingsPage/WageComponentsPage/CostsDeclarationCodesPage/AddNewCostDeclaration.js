class AddNewCostDeclaration{
    static openAddNewCostDeclaratioForm(){
        return cy.get('.css-0 > .MuiButtonBase-root').click();
    }
    static cancelAddNewCostDeclaratioForm(){
        return cy.get('.MuiButton-outlined').click();
    }

}

export default AddNewCostDeclaration;
