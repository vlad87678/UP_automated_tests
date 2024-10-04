import {MENU} from '../../../support/utils/sideMenuConstants.js';
class SideMenu{
    static sideMenuSelector() {
        return cy.get('.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-2irb2k');
    }

    //--------------- Asserts ---------------------

    static assertTitleSelector(){
        return cy.get('.MuiTypography-root.MuiTypography-h6.MuiTypography-noWrap.css-1wdhjlr');
    }
    
    //--------------- Methods ---------------------   

    static openDashboardSection(){
        this.sideMenuSelector().contains(MENU.DASHBOARD).click();
        this.assertTitleSelector().contains(MENU.DASHBOARD).should("be.visible");
    }

    static openCompaniesSection(){
        this.sideMenuSelector().contains(MENU.COMPANIES).click()
        this.assertTitleSelector().contains(MENU.COMPANIES).should("be.visible");
    }

    static openContractsSection(){
        this.sideMenuSelector().contains(MENU.CONTRACTS).click();
        this.assertTitleSelector().contains(MENU.CONTRACTS).should("be.visible");
    }
    
    static openEmployeesSection(){
        this.sideMenuSelector().contains(MENU.EMPLOYEES).click();
        this.assertTitleSelector().contains(MENU.EMPLOYEES).should("be.visible");
    }

    static openDocsSection(){
        this.sideMenuSelector().contains(MENU.DOCS).click()
        this.assertTitleSelector().contains(MENU.DOCS).should("be.visible");
    }

    static openPayrollSettingsSection(){
        this.sideMenuSelector().contains(MENU.PAYROLL_SETTINGS).click()
        this.assertTitleSelector().contains(MENU.PAYROLL_SETTINGS).should("be.visible");
    }

    static openUsersSection(){
        this.sideMenuSelector().contains(MENU.USERS).click();
        this.assertTitleSelector().contains(MENU.USERS).should("be.visible");
    }

    static openBlogsSection(){
        this.sideMenuSelector().contains(MENU.BLOGS).click()
        this.assertTitleSelector().contains(MENU.BLOGS).should("be.visible");
    }

}

export default SideMenu;