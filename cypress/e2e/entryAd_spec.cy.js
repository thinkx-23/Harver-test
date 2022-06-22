import BasePage from './scripts/basePage';
import EntryAdPage from './scripts/entryAdPage';

context('Harver UI test', () => {

  before(function () {    
    cy.visit(Cypress.env('QA'))
  })


describe('Entry Ad tests', () => {

  it('Succesfully display ad when entering to the page', () => {
    
    const base = new BasePage();
    const entryAd = new EntryAdPage();

    //Navigate to Entry Ad page
    base.NavMainMenu("entry_ad").click();

    //Verify displaying ad/modal pop up
    base.PageTitle().should('have.include.text', 'Entry Ad')

    //Verify entry ad displays when navigates to page initially 
    entryAd.ModalPopUp().should('be.visible')

  })

  it('Succesfully close Ad', () => {
    
    const entryAd = new EntryAdPage();
    
    //Verify entry ad displays when navigates to page initially 
    entryAd.ModalPopUp().should('be.visible')


    //Click close of the entry ad
    entryAd.CloseModalPopUp().click();

    //Verify entry ad will not display after closing it 
    entryAd.ModalPopUp().should('does.not.visible')

  })

  it('Succesfully re-enable Ad pop up', () => {
    
    const entryAd = new EntryAdPage();
    
    //Click re-enable pop up link
    entryAd.ReenablePopUp().click()


    //Verify Ad displays again after enabling it 
    entryAd.ModalPopUp().should('be.visible')

  })
  
})

})