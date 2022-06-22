import BasePage from '../e2e/scripts/basePage';
import AddRemoveElementsPage from './scripts/addRemoveElementsPage';

context('Harver UI test', () => {

  before(function () {    
     cy.visit(Cypress.env('QA')) 
  })


describe('Add remove elements tests', () => {

  it('Successfully added elements', () => {
    
    const base = new BasePage();
    const addRemoveElements = new AddRemoveElementsPage();

    //Navigate to Add remove elements page
    base.NavMainMenu("add_remove_elements/").click();

    //Verify navigation 
    base.PageTitle().should('have.include.text', 'Add/Remove Elements')

    //Add element 
    base.Button("Add Element").click()

    //Verify elements 
    addRemoveElements.AddedElement().should('be.visible')

  })

  it('Successfully remove added elements', () => {
    
    const base = new BasePage();
    const addRemoveElements = new AddRemoveElementsPage();

    //Verify elements are present/added
    addRemoveElements.AddedElement().should('be.visible')

    //Click delete button
    base.Button("Delete").click()

    //Verify element is deleted
    addRemoveElements.AddedElement().should('not.exist')

  })
})

})