describe('Custom commands',()=>{
    it('Should login to application using custom cypress command',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
        cy.login('username','password')
    })
})