class AuthenticationPage{
    static emailField(){
        return cy.get('input[type="email"]')
    }

    static passwordField(){
        return cy.get('input[type="password"]')
    }  

    static signInButton(){
        return cy.get('button[type="button"]').contains("Sign in")
    }
    
    static profileIconDropdown(){
        return cy.get('.MuiAvatar-root.MuiAvatar-circular.MuiAvatar-colorDefault.css-mgeb4u')
    }

    static logoutButton(){
        return cy.get('#account-menu > .MuiPaper-root > .MuiList-root').contains('Log out')
    }

    //--------------- Asserts ---------------------

    static assertDashboardTitleIsVisible(){
        return cy.get('.MuiTypography-root.MuiTypography-h6.MuiTypography-noWrap.css-1wdhjlr').should("be.visible")
    }

    static assertWrongEmailOrPasswordValidationMessageIsVisible(){
        return cy.get('#mui-2-helper-text').contains("Incorrect Email or Password").should("be.visible")
    }

    //--------------- Methods ---------------------  

    static loginMethod(email, password){
        this.emailField().type(email)
        this.passwordField().type(password)
        this.signInButton().click()
    }

    static logout(){
        this.profileIconDropdown().click()
        this.logoutButton().click()
    }

}

export default AuthenticationPage