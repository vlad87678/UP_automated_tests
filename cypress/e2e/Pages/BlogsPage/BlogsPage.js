class BlogsPage{
    static addNewBlogBtn(){
        return cy.get('.css-9jay18 > .MuiBox-root > .MuiButtonBase-root').should("be.visible")
    }
}

export default BlogsPage;