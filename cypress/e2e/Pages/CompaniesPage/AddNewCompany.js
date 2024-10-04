class AddNewCompany{
    static addNewCompanyBtn(){
        return cy.get('.css-10egq61 > .MuiButtonBase-root')
    }

    static saveAddNewCompanyBtn(){
        return cy.get('.css-0 > .MuiButtonBase-root').click()
    }

    static saveAndNextAddNewCompanyBtn(){
        return cy.get('.css-1ahhkj7 > :nth-child(2) > .MuiButtonBase-root').click()
    }

    static cancelAddNewCompanyBtn(){
        return cy.get(':nth-child(3) > .MuiButtonBase-root').click()
    }
    //################### Company Categories #########################################
    static companySectionBtn(){
        return cy.get('#simple-tab-0')
    }

    static contactSectionBtn(){
        return cy.get('#simple-tab-1')
    }

    static branchesSectionBtn(){
        return cy.get('#simple-tab-2')
    }

    static payrollSectionBtn(){
        return cy.get('#simple-tab-3')
    }

    static managersSectionBtn(){
        return cy.get('#simple-tab-4')
    }

    static partnersSectionBtn(){
        return cy.get('#simple-tab-5')
    }

    static financialSectionBtn(){
        return cy.get('#simple-tab-6')
    }

    static integrationSectionBtn(){
        return cy.get('#simple-tab-7')
    }

    static structureSectionBtn(){
        return cy.get('#simple-tab-8')
    }

    //################### Company  #########################################

    static fillCompanyName(){
        return cy.get('#mui-23')
    }

    static fillComercialName(){
        return cy.get('#mui-24')
    }

    static fillStreetName(){
        return cy.get('#mui-25')
    }

    static fillNumber(){
        return cy.get('#mui-26')
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

    static openCountryDropdown(){
        return cy.get('.dropdown--white-background > .MuiInputBase-root > .MuiSelect-select')
    }

    static selectCountry(){
        return cy.get('#mui-30')
    }

    static fillCompanyIdNumber(){
        return cy.get('#mui-31')
    }
    
    static openCompanyFormatDropdown(){
        return cy.get('.css-1ujwbv0 > .MuiBox-root > .MuiInputBase-root > .MuiSelect-select')
    }

    static selectFromCompanyFormatDropdown(){
        return cy.get('#mui-32')
    }
   
    static fillEmailAddress(){
        return cy.get('input[placeholder="Email"]')
    }

    static activateToggleSmallCompany(){
        return cy.get('.css-q39egz > .MuiTypography-root > span');
    }

    static activateToggleUnionDelegation(){
        return cy.get('.css-1w1zhq2 > .MuiTypography-root > span');
    }

    static deactivateToggleActive(){
        return cy.get('.MuiStack-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    static deactivateToggleParentCompany(){
        // BUG app crash
        return cy.get('.css-196ptvx > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input');
    }

    static openParentCompanyDropdown(){
        return cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    }

    static selectParentCompanyFromDropdown(){
        return cy.get('#mui-33')
    }

    static uploadLogoFiles(){
        cy.uploadFile('testImportID.jpg', 'image/jpeg', 'input[type="file"]');
    }


    // ########## Asserts  #####################################################

    static assertAdddNewCompanyBtn(){
        this.addNewCompanyBtn().should("be.visible")
    }
    static assertCompanyMenu(){
        return cy.get('.MuiTabs-flexContainer')
    }
    static assertSectionsVisibility(){
        this.assertCompanyMenu().should('be.visible')

    // ######## Can not access the selectors for horizontal items from menu ################

        //this.companySectionBtn().find('aria-selected="false').should('have.value','true');
        //this.contactSectionBtn().should('have.aria-selected', 'disabled');
        //this.branchesSectionBtn().should('be.disabled');
        // this.payrollSectionBtn().should('be.visible');
        // this.managersSectionBtn().should('be.visible');
        // this.partnersSectionBtn().should('be.visible');
        // this.financialSectionBtn().should('be.visible');
        // this.integrationSectionBtn().should('be.visible');
        // this.structureSectionBtn().should('be.visible');
        // this.companySectionBtn().should('be.visible');
    }

   

    // ########## Methods  #####################################################
    static openAddNewCompanyForm(){
        this.addNewCompanyBtn().click();
    }

    static moveBetweenSection(){
        this.companySectionBtn().click();
        this.contactSectionBtn().click();
        this.branchesSectionBtn().click();
        this.payrollSectionBtn().click();
        this.managersSectionBtn().click();
        this.partnersSectionBtn().click();
        this.financialSectionBtn().click();
        this.integrationSectionBtn().click();
        this.structureSectionBtn().click();
        this.companySectionBtn().click();

    }
   
   
    static completeCompanySection(companyName,commercialName,streetName,number,busNumber,city, postalCode,country, idNumber,companyFormat, email){
        //this.companySectionBtn().click();
        this.fillCompanyName().type(companyName);
        this.fillComercialName().type(commercialName);
        this.fillStreetName().type(streetName);
        this.fillNumber().type(number);
        this.fillBusNumber().type(busNumber);
        this.fillCity().type(city);
        this.fillPostalCode().type(postalCode);
        this.openCountryDropdown().click();
        this.selectCountry().contains(country).click();
        this.fillCompanyIdNumber().type(idNumber);
        this.openCompanyFormatDropdown().click();
        this.selectFromCompanyFormatDropdown().contains(companyFormat).click();
        this.fillEmailAddress().type(email);
        this.uploadLogoFiles();
    }

    static activateToggles(){
        this.activateToggleSmallCompany().click();
        this.activateToggleUnionDelegation().click();
        this.deactivateToggleActive().click();
        //this.deactivateToggleParentCompany().click();
        //this.openParentCompanyDropdown().click();
        //this.selectParentCompanyFromDropdown().contains(parentCompany).click();
    }
 

    //######## Need to continue to fill in the fields from Company menu ##################
    static completeContractSection(){
        
    }

    static completeBranchesSection(){
        
    }

    static completePayrollSection(){
        
    }

    static completeContractSection(){
        
    }

    static completeManagersSection(){
        
    }

    static completePartnersSection(){
        
    }

    static completeFinancialSection(){
        
    }

    static completeIntegrationSection(){
        
    }

    static completeStructureSection(){
        
    }



}

export default AddNewCompany;