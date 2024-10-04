class AddNewBlog{
    static addNewBlogBtn(){
        return cy.get('.MuiTouchRipple-root.css-w0pj6f').should("be.visible")
    }
}

export default AddNewBlog;