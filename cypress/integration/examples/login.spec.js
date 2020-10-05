describe('Working with inputs', () => {


    it('should override the current time',()=>{
        const date = new Date(2020,3,10).getTime();
        cy.clock(date);
        cy.log(date)
    })

    it('Load page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item',{log:true})
        cy.title().should('include','Zero - Log in')
    })
    it('Should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear();
        cy.get('@username').type('Some invalid name', { delay: 50 })

    })

    it('Should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear();
        cy.get('@password').type('some invalid password', { delay: 50 })
    })
    it('Should mark checkbox', () => {
        cy.get('input[type="checkbox"').click();
        cy.wait(5000)
    })
    it('Should submit login form', () => {
        cy.contains('Sign in').click();
    })



    it('should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
        
    })
})