class AddNewEmployee {
    //################# Open Add new employee form #######################
    static addNewEmployeeBtn(){
        return cy.get('.css-wjtro2 > :nth-child(1)').click();
    }

    //################# Open Sections Information #######################
    
    static gotoPersonalInfo(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(1)');
    }

    static gotoContactInfo(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(2)');
    }

    static gotoWorkingInfo(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(3)');
    }

    static gotoAccount(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(4)');
    }

    //################## Personal Info ###################################
    static fillFirstName() {
        return cy.get('input[placeholder*="First name"]');
    }

    static fillLastName() {
        return cy.get('input[placeholder*="Last name"]');
    }
 
    static selectSex(sex) {
        return cy.get('.MuiToggleButtonGroup-root.css-sjny8g').contains(sex);
    }
 
    static fillINSZ() {   
        return cy.get('input[placeholder*="INSZ"]');
    }

    static fillDateOfBirth() {
        return cy.get('#mui-34');
    }

    static fillBirthplace() {
        return cy.get('input[placeholder*="Birthplace"]');
    }

    static selectBirthCountry() {
        return cy.get(':nth-child(4) > :nth-child(3) > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select');
    }

    static openNationalityDropdown() {
        return cy.get(':nth-child(4) > .css-1qlikem > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select');
    }

    static selectNationality(){
        return cy.get('#menu- > .MuiPaper-root');
    }

    static openLanguageDropdown() {
        return cy.get('.css-ua6m1r > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select > .css-1uofgv2');
    }

    static selectLanguage() {
        return cy.get('#mui-38');
    }

    static chooseMaritalStatus(){
        return cy.get('.MuiToggleButtonGroup-root.css-1wgub3g');
    }
    //################## Dependants ###################################

    static activateToggleDependants(){
        return cy.get('.MuiFormControlLabel-root.MuiFormControlLabel-labelPlacementEnd.css-9lccru');
    }
    
    static activateTogglePartner(){
        return cy.get('.css-1d6t932 > :nth-child(1) > .MuiFormControlLabel-root');
    }

    static activateToggleDisabledPartner(){
        return cy.get(':nth-child(2) > .MuiFormControlLabel-root');
    }

    static fillChildren(){
        return cy.get('input[placeholder*="Children"]');
    }

    static fillDisabledChildren(){
        return cy.get('input[placeholder*="Disabled children"]');
    }

    static fillElderly(){
        return cy.get('input[placeholder*="Elderly"]');
    }

    //################## Contact info ###################################

    static fillMobileNumber(){
        return cy.get('input[placeholder*="Mobile number"]');
    }

    static fillEmailAddress(){
        return cy.get('input[placeholder="E-mail address"]')
    }

    static fillIceMobileNumber(){
        return cy.get('input[placeholder="ICE mobile number"]')
    }

    static fillStreetName(){
        return cy.get('input[placeholder="Street name"]')
    }

    static fillNumber(){
        return cy.get('input[placeholder="Number "]')
    }

    static fillBusNumber(){
        return cy.get('input[placeholder="Bus number"]')
    }

    static fillCity(){
        return cy.get('input[placeholder="City"]')
    }

    static fillPostalCode(){
        return cy.get('input[placeholder="Postal code"]')
    }

    static openCountryOfResidenceDropdown() {
        return cy.get(':nth-child(3) > .css-l7xe1d > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select');
    }

    static selectCountryOfResidence(){
        return cy.get('#menu- > .MuiPaper-root');
    }

    //################### Stay address #################################

    static checkStayAdress(){
        return cy.get('.css-49hzxv > .MuiBox-root > .MuiFormControlLabel-root > .MuiTypography-root');
    }

    static fillStayStreet(){
        return cy.xpath('//*[@id="contactInfo"]/div/div[4]/div[1]');
        //return cy.get('#mui-71');
    }

    static fillStayNumber(){
        return cy.xpath('//*[@id="contactInfo"]/div/div[4]/div[2]/div[1]');
        //return cy.get('#mui-72');
    }

    static fillStayBus(){
        return cy.xpath('//*[@id="contactInfo"]/div/div[4]/div[2]/div[2]')
        //return cy.get('.MuiBox-root.css-11ze7cv > .MuiBox-root.css-8atqhb >.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.css-ap2f8b');
    }

    static fillStayCity(){
        return cy.xpath('//*[@id="contactInfo"]/div/div[4]/div[3]')

        //return cy.get('#mui-74');
    }

    static fillStayPostalCode(){
        return cy.xpath('//*[@id="contactInfo"]/div/div[4]/div[4]')

        //return cy.get('#mui-75');
    }

    static openStayCountryDropDown() {
        return cy.get(':nth-child(4) > .css-l7xe1d > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select');
    }

    static selectStayCountry(){
        return cy.get('#menu- > .MuiPaper-root');
    }

    //################### Working Info #########################################

    static chooseWorkerClass(){

        return cy.xpath('//*[@id="workingInfo"]/div/div[2]/div[1]/div/div/button[1]')
    }

    static openCompanyBranchDropDown() {
        return cy.get(':nth-child(4) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').scrollIntoView();
    }

    static selectCompanyBranch(){
         return cy.get('#multiple-limit-tags-option-3');
    }
    static selectB(){
        return cy.get('#workingInfo > :nth-child(1)').scrollIntoView();
   }
    static openReasonForEmploymentDropDown() {
        return cy.get(':nth-child(2) > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select').scrollIntoView();
        //return cy.get('#workingInfo > div > div:nth-child(2) > div.MuiBox-root.css-1qlikem > div');
    }

    static selectReasonForEmployment(){
        return cy.get('#mui-53');
       // return cy.get('.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiMenuItem-root.MuiMenuItem-gutters.css-i7bw1k');
    }

    static fillIBAN(){
        return cy.get('#mui-57');
    }

    static fillBIC(){
        return cy.get('#mui-56');
    }

    static openModeOfTransportDropDown() {
        return cy.get(':nth-child(2) > :nth-child(1) > .dropdown--white-background > .MuiInputBase-root > .MuiSelect-select');
    }

    static selectModeOfTransport(){
        return cy.get('[data-value="1"]');
    }
    
    static selectModeOfTransportFullBehavior(){
        return cy.get('[data-value="1"]');
    }

    static fillYearsOfExperience(){
        return cy.get('#mui-58');
    }
    //################### Permanent employee ###################################
    
    static checkPermanentEmployee(){
        return cy.get('.css-s8vbhp > .MuiBox-root > .MuiFormControlLabel-root > .MuiTypography-root');
    }
    
    static fillStartDate(){
        //return cy.xpath('//*[@id="workingInfo"]/div/div[2]/div[1]');
        return cy.get('#mui-70');
    }
    //################### Account ##########################################

    static uploadIDsFiles(){
        cy.uploadMultipleFiles(
            ['testImportID.jpg', 'testImportID2.jpg', 'testImportID3.jpg'],
            ['image/jpeg', 'image/jpeg', 'image/jpeg'],
            'input[type="file"]'
          );
    }

    static fillIDCardNumber(){
        return cy.get('#mui-59');

    }
    static fillExpirationDate(){
        return cy.get('#mui-60');

    }
    static fillPassword(){
        return cy.get('#mui-61');

    }
    //################### Submit form ##########################################

    static checkInactive(){
        return cy.get('.MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label.css-1juzb4r').contains('Inactive');
    }

    static saveBtn() {
        return cy.get('.MuiTouchRipple-root.css-w0pj6f').contains("Save");
    }

    static cancelBtn() {
        return cy.get('.css-1qhmto6 > .MuiButtonBase-root').contains("Cancel");
    }

    static gdprToogle(){
        return cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControlLabel-root > .MuiSwitch-root').click();
    }

      //--------------- Methods ---------------------  

      static moveBetweenSectionInformation(){
        this.gotoPersonalInfo().click();
        this.gotoContactInfo().click();
        this.gotoWorkingInfo().click();
        this.gotoAccount().click();
      }

      static completePersonalInfo(firstName, lastName,sex,insz, dateOfBirth,birthplace,country,nationality,language, maritalStatus){
        this.gotoPersonalInfo().click()
        this.fillFirstName().type(firstName);
        this.fillLastName().type(lastName);
        this.selectSex(sex).click();
        this.fillINSZ().type(insz);
        this.fillDateOfBirth().type(dateOfBirth);
        this.fillBirthplace().type(birthplace);
        this.selectBirthCountry().click().then(() => cy.contains(country).click());
        this.openNationalityDropdown().click();
        this.selectNationality().contains(nationality).click();
        this.openLanguageDropdown().click();
        this.selectLanguage().contains(language).click();
        this.chooseMaritalStatus().contains(maritalStatus).click();
    }

    static completeDependants(children,disabledChildren,elderly){
        this.gotoPersonalInfo().click();
        this.activateToggleDependants().click();
        this.activateTogglePartner().click();
        this.activateToggleDisabledPartner().click();
        this.fillChildren().type(children);
        this.fillDisabledChildren().type(disabledChildren);
        this.fillElderly().type(elderly);
    }

    static completeContactInfo(mobilenumber,emailAdress,iceMobileNumber, streetname,number, busnumber,city, postalcode,countryofresidence){
        this.gotoContactInfo().click();
        this.fillMobileNumber().type(mobilenumber);
        this.fillEmailAddress().type(emailAdress);
        this.fillIceMobileNumber().type(iceMobileNumber);
        this.fillStreetName().type(streetname);
        this.fillNumber().type(number);
        this.fillBusNumber().type(busnumber);
        this.fillCity().type(city);
        this.fillPostalCode().type(postalcode);
        this.openCountryOfResidenceDropdown().click();
        this.selectCountryOfResidence().contains(countryofresidence).click();
    }

    static completeStayAddress(staystreet, staynumber, staybus,staycity,staypostalcode,staycountry){
        this.gotoContactInfo().click();
        this.checkStayAdress().click();
        this.fillStayStreet().type(staystreet);
        this.fillStayNumber().type(staynumber);
        this.fillStayBus().type(staybus);
        this.fillStayCity().type(staycity);
        this.fillStayPostalCode().type(staypostalcode);
        this.openStayCountryDropDown().click();
        this.selectStayCountry().contains(staycountry).click();
    }

    static completeWorkingInfo(workerclass,reasonforemployment,iban,bic,modeoftransport,yearsofexp){
        this.gotoWorkingInfo().click();
        this.chooseWorkerClass().contains(workerclass).click({ force: true });
        // this.openCompanyBranchDropDown().click();
        // this.selectCompanyBranch().contains(companybranch).click();
        // this.selectB().click();
        this.openReasonForEmploymentDropDown().click({force: true});
        this.selectReasonForEmployment().contains(reasonforemployment).click();
        this.fillIBAN().type(iban);
        //this.fillBIC().type(bic);
        // this.openModeOfTransportDropDown().click({force: true});
        // this.selectModeOfTransport().contains(modeoftransport).click({force: true});
        this.fillYearsOfExperience().type(yearsofexp);
    }

    static completePermanentEmployee(modeoftransport, yearsofexp, startdate,iban, companybranch){
        this.gotoWorkingInfo().click();
        this.checkPermanentEmployee().click();
        this.openModeOfTransportDropDown().click({force: true});
        this.selectModeOfTransport().contains(modeoftransport).click({force: true});
        this.selectB().click();

        this.fillYearsOfExperience().type(yearsofexp);

        this.fillStartDate().type(startdate);
         this.fillIBAN().type(iban);
        // this.fillBIC().type(bic);
       
        this.openCompanyBranchDropDown().click();
        this.selectCompanyBranch().contains(companybranch).click();

    }

    static completeAccount(idCardNumber,expirationdate,password){
        this.gotoAccount().click();
        this.uploadIDsFiles();
        this.fillIDCardNumber().type(idCardNumber);
        this.fillExpirationDate().type(expirationdate);
        this.fillPassword().type(password);
    }


    static setInactiveEmployee(){
        this.checkInactive().click();
    }

    static saveAndSubmitForm(){
        this.saveBtn().click();
    }

    static cancelForm(){
        this.cancelBtn().click();
    }
}

export default AddNewEmployee;
