class ServiceCodesPage{
    static gotoSeviceCodes(){
        return cy.get('.css-osault > .css-8atqhb > .MuiTabs-root > .MuiTabs-scroller > .MuiTabs-flexContainer > #simple-tab-0').click()
    }
}

export default ServiceCodesPage;
