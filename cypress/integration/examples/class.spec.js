
class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example')
    }
    static wait(number) {
        cy.wait(number)
    }

}

class HomePage extends BasePage {

    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView();
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}
describe('Abstraction with classes', () => {

    before(function(){
                HomePage.loadHomePage();

    })

    after(function(){
        //runs after all test inside describe
        //clean cookies
    })

    beforeEach(function(){

    })

    afterEach(function(){

    })


    it.only('1st IT', () => {
        HomePage.scrollToBottom();
        HomePage.wait(5000)
        HomePage.scrollToTop();
        HomePage.wait(3000)
    })

    it("2nd IT", () => {
        HomePage.scrollToBottom();
        HomePage.wait(5000)
        HomePage.scrollToTop();
        HomePage.wait(3000)
    })

  
})