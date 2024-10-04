class AddNewSuperAdmin{
    static superAdminsBtn(){
        return cy.get('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected.css-13x3t1z').contains('Superadmins').click();
    }
    static assertAddNewSuperAdminBtn(){
        return cy.get('.MuiButton-contained').contains("+ Add new superadmin").should("be.visible");
    }
}

export default AddNewSuperAdmin;
