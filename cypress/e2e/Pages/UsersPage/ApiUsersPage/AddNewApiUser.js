class AddNewApiUser{
    static apiUsersBtn(){
        return cy.get('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-13x3t1z').contains('API Users').click();
    }
    static assertNewApiUserBtn(){
        return cy.get('.MuiButton-contained').contains("+ New API User").should("be.visible");
    }
}

export default AddNewApiUser;
