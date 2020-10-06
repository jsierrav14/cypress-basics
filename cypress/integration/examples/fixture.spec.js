describe('Login with Fixtures data', ()=>{
    it('should try to login',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html', { timeout: 10000 })  
        cy.fixture('user').then(user=>{
            const username = user.username
            const password = user.password   
            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()


        })

    
    })
})