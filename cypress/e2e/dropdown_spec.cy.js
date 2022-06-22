import BasePage from './scripts/basePage';

context('Harver UI test', () => {

describe('Select drop down values tests', () => {

  before(function () {    
    cy.visit(Cypress.env('QA'))
    cy.fixture('testdata').then(function (testdata) {
      this.testdata = testdata
    })
  })

  it('Successfully select option 1', function()  {
    
    const base = new BasePage();

    //Navigate to drop down list page
    base.NavMainMenu("dropdown").click();

    //Verify navigation 
    base.PageTitle().should('have.include.text', 'Dropdown List')

    //Select option 1 and verify value
    cy.get('select').select(this.testdata.selectOption).should('have.value', this.testdata.selectOptionValue)


  })
})

})