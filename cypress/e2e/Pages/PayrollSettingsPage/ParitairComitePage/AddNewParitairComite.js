class AddNewParitairComite{
    static addNewParitairComiteBtn(){
        return cy.get('.css-wsfch7 > .MuiButtonBase-root').should("be.visible")
    }
}

export default AddNewParitairComite;
