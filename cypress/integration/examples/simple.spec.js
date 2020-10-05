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
})