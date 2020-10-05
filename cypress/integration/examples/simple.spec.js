
describe('My firsts simple test with cypress', () => {
    it('True should be true', () => {
       expect(true).to.equal(true)
    })

    it('5 should be 5',()=>{
        expect(5).to.equal(5)
    })
})
describe('Another describe block',()=>{
    it('false should be false',()=>{
        expect(false).to.equal(false)
    })
})

describe('Browser Actions', ()=>{
    it('Should load correct url',()=>{
        cy.visit('https://reactjs.org/',{timeout:10000})
    })

    it('should check correct url', ()=>{
        cy.url().should('include','reactjs.org')
    })
    it('should wait for 3 seconds', ()=>{
        cy.wait(3000)
    })

    it('should pause the execution',()=>{
        cy.pause()
    })
    it('should check for the current element on the page',()=>{
        cy.get('h1').should('be.visible')
    })
    
})