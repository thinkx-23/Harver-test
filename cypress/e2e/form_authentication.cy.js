import BasePage from './scripts/basePage';
import LoginPage from './scripts/loginPage';

context('Harver UI test', () => {

  before(function () {      
    cy.visit(Cypress.env('QA'))
    cy.fixture('testdata').then(function (testdata) {
      this.testdata = testdata
    })
  })


describe('Form Authentication tests', () => {

  it('Succesfully login to the account', function()  {
    
    const base = new BasePage();
    const login = new LoginPage();

    //Navigate to Authentication page
    base.NavMainMenu("login").click();

    //Verify navigation 
    login.PageTitle().should('have.include.text', 'Login Page')

    //Enter login details
    login.EnterLogindetails(this.testdata.username, this.testdata.password)

    //Verify login success message 
    login.LoginMessage().should('have.include.text', 'You logged into a secure area!')

    //Verify navigation 
    login.PageTitle().should('have.include.text', 'Secure Area')

  })

  it('Succesfully Logout from account', () => {
    
    const base = new BasePage();
    const login = new LoginPage();

    //Verify logged in page 
    login.PageTitle().should('have.include.text', 'Secure Area')

    //Click Logout
    login.LogoutButton().click()

    //Verify logout success message 
    login.LoginMessage().should('have.include.text', 'You logged out of the secure area!')

    //Verify navigation 
    login.PageTitle().should('have.include.text', 'Login Page')

  })
  
})

})