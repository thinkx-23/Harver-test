import BasePage from './basePage';

class EntryAdPage {

    constructor() {
        this.basePage = new BasePage();
    }

    //Elements 
    ModalPopUp() { return cy.get("div.modal");    }
    CloseModalPopUp() { return cy.get("div.modal p").contains("Close");    }
    ReenablePopUp() { return cy.get('#restart-ad'); }


}
export default EntryAdPage;