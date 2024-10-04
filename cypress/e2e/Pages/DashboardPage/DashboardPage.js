class DashboardPage{
    static checkErrorLogs(){
        return cy.get('.css-gvoll6 > .MuiTypography-root').contains('Error Logs').should("be.visible");
    }

}
export default DashboardPage;