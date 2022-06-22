import BasePage from '../scripts/basePage';

class AddRemoveElementsPage {

    constructor() {
        this.basePage = new BasePage();
    }

    //Elements 
    AddedElement() { return cy.get("button.added-manually");    }


}
export default AddRemoveElementsPage;