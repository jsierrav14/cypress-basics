describe('Cypress .$ function',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Expose jquery in your current windows',()=>{
        const signInButton = Cypress.$('#sign_button')
        signInButton.click()
    })
})