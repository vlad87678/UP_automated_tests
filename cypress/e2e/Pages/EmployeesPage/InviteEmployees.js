class InviteEmployees{

    static inviteEmployeesBtn(){
        return cy.get('.css-wjtro2 > :nth-child(2)').click();
    }

    static inviteEmployeeSection(){
        return cy.get('#simple-tab-0');
    }

    static createOnboardingLinkSection(){
        return cy.get('#simple-tab-1');
    }

    static activeLinksSection(){
        return cy.get('#simple-tab-2');
    }
    //################## Invite employees ###################################

    static fillFirstName() {
        return cy.get('input[placeholder*="First name"]');
    }

    static fillLastName() {
        return cy.get('input[placeholder*="Last name"]');
    }

    static fillEmailAddress(){
        return cy.get('input[placeholder="E-mail address"]')
    }

    static openCompanyBranchDropDownFromInvEmp() {
        return cy.get('.css-118qw60 > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select > .css-1uofgv2');
    }

    static selectCompanyBranchFromInvEmp(){
         return cy.get('#mui-38');
    }

    static openWorkerClassDDropDown(){
        return cy.get(':nth-child(2) > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select > .css-1uofgv2')
    }

    static selectWorkerClass(){
        return cy.get('#mui-37');

    }
    static openLanguageDropdown() {
        return cy.get(':nth-child(3) > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select > .css-1uofgv2');
    }

    static selectLanguage() {
        return cy.get('#mui-38');
    }
    //################## Create onboarding info ###################################

    static openCompanyBranchDropdownFromCreateOnb(){
        return cy.get('.MuiSelect-select.MuiSelect-outlined.MuiSelect-multiple.MuiInputBase-input.MuiOutlinedInput-input.css-1880b1u')
    }

    static selectCompanyBranchFromCreateOnb(){
        return cy.get('#mui-140')
    }

    static setAllBranchesToogle(){
        return cy.xpath('//*[@id="simple-tabpanel-1"]/div/div/div[1]/div[2]/div/span/span[1]/input')
    }
    //################## Submit form ###################################


    static cancelBtn(){
        return cy.get('.css-fka7b4 > .MuiBox-root > .MuiButtonBase-root');
    }

    static moveBetweenSection(){
        this.inviteEmployeeSection().click();
        this.createOnboardingLinkSection().click();
        this.activeLinksSection().click();
    }

    static completeCreateOnboardingLink(companybranch){
        this.createOnboardingLinkSection().click();
        // this.openCompanyBranchDropdownFromCreateOnb().contains('Company branch').click();
        // this.selectCompanyBranchFromCreateOnb().contains(companybranch).click();
 
        this.setAllBranchesToogle().click();
    }

    static completeInviteEmployees(firstName, lastName, emailAdress, companybranch, workerclass, language){
        this.inviteEmployeeSection().click();
        this.fillFirstName().type(firstName);
        this.fillLastName().type(lastName);
        this.fillEmailAddress().type(emailAdress);
        // this.openCompanyBranchDropDownFromInvEmp().click();
        // this.selectCompanyBranchFromInvEmp().contains(companybranch).click();
        this.openWorkerClassDDropDown().click();
        this.selectWorkerClass().contains(workerclass).click();
        this.openLanguageDropdown().click();
        this.selectLanguage().contains(language).click();
    }

    static completeActiveLinks(){
        this.activeLinksSection().click();
    }

    static cancelForm(){
        this.cancelBtn().contains('Cancel').click();
    }



    
}
export default InviteEmployees;