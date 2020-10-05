describe('Browser actions', ()=>{
    it('should load books website',()=>{
         cy.visit('http://books.toscrape.com/',{timeout:10000})
         cy.url().should('include','books')
    })

    it('should click on travel category',()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })
})