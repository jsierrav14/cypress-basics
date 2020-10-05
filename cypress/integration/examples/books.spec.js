describe('Browser actions', ()=>{
    it('should load books website',()=>{
         cy.visit('http://books.toscrape.com/',{timeout:10000})
         cy.url().should('include','books')
         cy.log('Before Reload')
         cy.reload()
         cy.log('after reloading')
    })

    it('should click on travel category',()=>{
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books',()=>{
       cy.get('.product_pod').its('length').should('eq',11)
    })
})

describe('Testing poetry',()=>{
    it('it should click on Poetry category',()=>{
        cy.get('a').contains('Poetry').click();
        cy.get('h1').contains('Poetry')
    })

    it('should click  in Olio',()=>{
        cy.get('a').contains('Olio').click();
    })

    it('Price should be £23.88 ',()=>{
        cy.get('.price_color').contains('£23.88')
    })
})