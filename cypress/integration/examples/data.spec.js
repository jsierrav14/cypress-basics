describe('Write / Read data to JSON', ()=>{
    it('Should write data into json',()=>{
        cy.writeFile('log.json',{
            name:'Mike',
            age:25
        })
    })

    it('Should write data to the text file',()=>{
        it('Should write data into a text file',()=>{
            cy.writeFile('log.txt',"Hello world")
        })
    })

    it('should read and verify data from json file',()=>{
        cy.readFile('log.json').its('age').should('eq',25)
    })

/*    it('should read and verify data from the text file',()=>{
        cy.readFile('log.txt').should('eq','Hello world')
    })*/

    it('Should read and verify browser docment content',()=>{
        cy.visit('http://www.example.com')
        cy.wait(2000)
        cy.document().its('contentType').should('eq','text/html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
    })
})