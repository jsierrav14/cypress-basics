describe('Keyboard press simulation',()=>{
    it('Should be search with press enter',()=>{
        cy.visit('http://zero.webappsecurity.com/',{timeout:10000})
        cy.get('#searchTerm').type('just some text {enter}')
    })
})