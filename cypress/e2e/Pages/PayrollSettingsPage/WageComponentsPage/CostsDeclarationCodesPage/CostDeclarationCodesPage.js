class CostDeclarationCodesPage{
    static goToCostDeclarationCodes(){
        return cy.get('.css-osault > .css-8atqhb > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #simple-tab-1').click();
    }
    static checkAddNewCostDeclaratioBtn(){
        return cy.get('.css-0 > .MuiButtonBase-root').should('be.visible');
    }
}

export default CostDeclarationCodesPage;
