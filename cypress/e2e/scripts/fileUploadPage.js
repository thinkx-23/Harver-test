import BasePage from './basePage';

class FileUploadPage {

    constructor() {
        this.basePage = new BasePage();
    }

    //Elements 
    FileUploadInput() { return cy.get('#file-upload');    }
    UploadButton() { return cy.get('#file-submit')    }
    UploadedFileName() { return cy.get('#uploaded-files') }


}
export default FileUploadPage;