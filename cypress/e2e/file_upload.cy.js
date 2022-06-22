import BasePage from './scripts/basePage';
import FileUplloadPage from './scripts/fileUploadPage';
import 'cypress-file-upload';

context('Harver UI test', () => {


describe('File Upload tests', () => {

  before(function () {    
    cy.visit(Cypress.env('QA'))   
    cy.fixture('testdata').then(function (testdata) {
      this.testdata = testdata
    })
  })


  it('Succesfully upload JPEG image', function()  {
    
    const base = new BasePage();
    const fileUpload = new FileUplloadPage();

    //Navigate to Authentication page
    base.NavMainMenu("upload").click();

    //Verify navigation 
    base.PageTitle().should('have.include.text', 'File Uploader')

    //Upload file to the input field
    fileUpload.FileUploadInput().attachFile(this.testdata.fileName)

    //Upload the file
    fileUpload.UploadButton().click()

    //Verify navigation 
    base.PageTitle().should('have.include.text', 'File Uploaded!')

    //Verify uploaded file name
    fileUpload.UploadedFileName().should('have.include.text', this.testdata.fileName)


  })
  
})

})