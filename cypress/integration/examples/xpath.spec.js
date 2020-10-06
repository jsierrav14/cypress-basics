describe('Xpaths with cypress', () =>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Should click on element using xpath',()=>{
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click();
    })

    it('Should displau login form',()=>{
        cy.xpath('//form').should('have.length',1)
    })
})