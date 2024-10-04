class AddNewDocument{
    static addNewDocumentBtn(){
        return cy.get('.MuiTouchRipple-root.css-w0pj6f').should("be.visible")
    }
}

export default AddNewDocument;