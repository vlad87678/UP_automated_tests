// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />

// script that hides XHR requests
import 'cypress-file-upload'



if(Cypress.config("hideXHR")){
    const app = window.top;
  
    if(!app.document.head.querySelector("[data-hide-command-log-request]")){
      const style = app.document.createElement("style");
      style.innerHTML = ".command-name-request, .command-name-xhr { display:none }";
      style.setAttribute("data-hide-command-log-request", "");
      app.document.head.appendChild(style)
    }
  }
  
  // hides sensitive data in cypress logs
  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
      if (options && options.sensitive) {
        // turn off original log
        options.log = false
        // create our own log with masked message
        Cypress.log({
          $el: element,
          name: 'type',
          message: '*'.repeat(text.length),
        })
      }
    
      return originalFn(element, text, options)
    })
  
  // log in request SuperAdmin
  Cypress.Commands.add("loginUPortal", () => {
    cy.fixture('test-data.json').then((testData)=>{
    cy.intercept({
      method: "POST",
      url: testData.api.getErrorAPI,
      
      }).as('projects');
      
      cy.session(
        'Login',
        ()=> {
          cy.visit('/');
          AuthenticationPage.loginMethod(email, pass)
          AuthenticationPage.assertDashboardTitleIsVisible()

        }
      )
    })
  })
  
// Import one file in a specific field example of use:
// cy.uploadFile('testImportID.jpg', 'image/jpeg', 'input[type="file"]');

Cypress.Commands.add("uploadFile", (fileName, fileType, selector) => {
    cy.fixture(fileName, 'base64').then(fileContent => {
      cy.get(selector).then(subject => {
        const blob = Cypress.Blob.base64StringToBlob(fileContent, fileType);
        const testFile = new File([blob], fileName, { type: fileType });
  
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
  
        const input = subject[0];
        input.files = dataTransfer.files;
        
        // Dispatch change event to simulate file upload
        const changeEvent = new Event('change', { bubbles: true });
        input.dispatchEvent(changeEvent);
      });
    });
  });

// Import multiple files in specific fields, example of use:
// cy.uploadMultipleFiles(
//     ['testImportID.jpg', 'testImportID2.jpg', 'testImportID3.jpg'],
//     ['image/jpeg', 'image/jpeg', 'image/jpeg'],
//     'input[type="file"]'
//   );
  Cypress.Commands.add("uploadMultipleFiles", (fileNames, fileTypes, selector) => {
    cy.wrap(fileNames).each((fileName, index) => {
      cy.fixture(fileName, 'base64').then(fileContent => {
        cy.get(selector).eq(index).then(subject => {
          const blob = Cypress.Blob.base64StringToBlob(fileContent, fileTypes[index]);
          const testFile = new File([blob], fileName, { type: fileTypes[index] });
  
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
  
          const input = subject[0];
          input.files = dataTransfer.files;
          
          // Dispatch change event to simulate file upload
          const changeEvent = new Event('change', { bubbles: true });
          input.dispatchEvent(changeEvent);
        });
      });
    });
  });
  
