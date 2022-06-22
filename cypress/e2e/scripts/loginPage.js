import BasePage from './basePage';

class LoginPage {

    constructor() {
        this.basePage = new BasePage();
    }

    //Elements 
    UsernameTxt() { return cy.get("#username");    }
    PasswordTxt() { return cy.get("#password");    }
    LoginButton() { return cy.get('#restart-ad'); }
    LoginMessage() { return cy.get('#flash-messages'); }
    PageTitle() { return cy.get("#content h2");   }
    LogoutButton(){ return cy.get("a.button.secondary.radius")}

    EnterLogindetails(username, password){
        this.UsernameTxt().type(username);
        this.PasswordTxt().type(password);
        this.basePage.Button("Login").click()

    }


}
export default LoginPage;