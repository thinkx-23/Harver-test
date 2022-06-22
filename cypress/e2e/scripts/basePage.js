class BasePage {
    NavMainMenu(menu) {
        return cy.get("a[href='/"+menu+"']");
    }

    PageTitle(name) {
        return cy.get("#content h3");
    }

    Button(name){
        return cy.get('button').contains(name)
    }
}
export default BasePage;