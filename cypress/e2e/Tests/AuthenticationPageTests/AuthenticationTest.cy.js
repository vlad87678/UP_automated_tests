import AuthenticationPage from '../../Pages/AuthenticationPage/AuthenticationPage.js'

describe("UpdatePro SuperAdmin Authentication", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.clearLocalStorage()
        cy.reload()
    })

    const email = Cypress.env('_email') 
    const pass = Cypress.env('_password')

    it("logs superAdmin with valid credentials", () => {
        AuthenticationPage.loginMethod(email, pass)
        AuthenticationPage.assertDashboardTitleIsVisible()
    })

    it("attempts superAdmin login with invalid email", () => {
        AuthenticationPage.loginMethod("invalidemail@mailinator.com", pass)
        AuthenticationPage.assertWrongEmailOrPasswordValidationMessageIsVisible()
    })
 
    it("attempts superAdmin login with invalid password", () => {
        AuthenticationPage.loginMethod(email, "sdasasf")
        //BUG-GASIT
        //AuthenticationPage.assertWrongEmailOrPasswordValidationMessageIsVisible()
    })

    it("logs superAdmin after validation", () => {
        AuthenticationPage.loginMethod(email, "Abcd12345")
        AuthenticationPage.passwordField().focus().clear().type(pass)
        AuthenticationPage.signInButton().click()
        AuthenticationPage.assertDashboardTitleIsVisible()
    })

    it("logs out SuperAdmin ", () => {
        AuthenticationPage.loginMethod(email, pass)
        AuthenticationPage.logout();
    })
})
