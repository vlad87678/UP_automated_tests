class WageComponentsPage{

    static goToWageComponents(){
        return cy.get('#simple-tab-1').click()
    }
    static checkSeviceCodes(){
        return cy.get(':nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #simple-tab-0').should('be.visible');
    }
    static checkCostDeclarationCodes(){
        return cy.get(':nth-child(1) > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #simple-tab-1').click()
    }
}

export default WageComponentsPage;
